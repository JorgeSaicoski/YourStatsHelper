import { Component, OnInit, signal } from '@angular/core';
import { environment } from '@env';
import {
  IPayPalConfig,
  ICreateOrderRequest 
} from 'ngx-paypal';
import { Plan } from '@model/plan.model';
import { User } from '@model/user.model';
import { UsersService } from '@service/users/users.service';
import { Message } from '@model/message.model';

@Component({
  selector: 'app-vip-purchase',
  templateUrl: './vip-purchase.component.html',
  styleUrls: ['./vip-purchase.component.scss']
})
export class VipPurchaseComponent implements OnInit {

  message: Message = {
    show: false,
  }

  plans: Plan[] =[
    {
      id: 1,
      name: "Week",
      days: 7,
      price: 2.5,
      description: "Looking to test the waters? Dive into our Week Plan! It's perfect for those seeking a brief trial period."
    },
    {
      id: 2,
      name: "Month",
      days: 30,
      price: 5,
      description: "Need assistance with an upcoming test or exam? Our Month Plan offers support tailored for your needs in the next month or soon."
    },
    {
      id: 3,
      name: "Six Month",
      days: 180,
      price: 18,
      description: "Embarking on a semester-long journey? Our Six-Month Plan is designed to guide you through your entire semester and ensure your success."
    },
    {
      id: 4,
      name: "Year",
      days: 365,
      price: 24,
      description: "Want to make a long-term commitment without breaking the bank? The Year Plan provides a cost-effective solution to help you achieve your academic goals."
    }
  ]

  currentPlan = signal<Plan>({ 
    id: 1,
    name: "Month",
    days: 30,
    price: 5,
    description: "Plan pre selected"
  })

  pricePerMonth = signal<Number>(5)

  selectedPlan: number = 1

  user: User = {
    id: 0,
    name: '',
    username: '',
    email: '',

  };

  public payPalConfig?: IPayPalConfig;



  constructor(
    private userService: UsersService,
  ) {}


  ngOnInit(): void {
    this.userService.getCurrentUser();
    this.user = this.userService.currentUser()
    this.initConfig()

  }
  private initConfig(): void {
    this.payPalConfig = {
        currency: 'USD',
        clientId: environment.sandbox_paypal,
        createOrderOnClient: (data) => < ICreateOrderRequest > {
            intent: 'CAPTURE',
            purchase_units: [{
                amount: {
                    currency_code: 'USD',
                    value: this.currentPlan().price.toFixed(2),
                    breakdown: {
                        item_total: {
                            currency_code: 'USD',
                            value: this.currentPlan().price.toFixed(2)
                        }
                    }
                },
                items: [{
                    name: this.currentPlan().name,
                    quantity: '1',
                    category: 'DIGITAL_GOODS',
                    unit_amount: {
                        currency_code: 'USD',
                        value: this.currentPlan().price.toFixed(2),
                    },
                }]
            }]
        },
        advanced: {
            commit: 'true'
        },
        style: {
            label: 'paypal',
            layout: 'vertical'
        },
        onClientAuthorization: (data:any) => {
            this.userService.getUserByIDAndIncreaseVip(this.user.id, this.currentPlan().days).subscribe(
              ()=>{
                this.message = {
                  show: true,
                  category: "success",
                  message: `You bougth the ${data.purchase_units[0].description.toUpperCase()}! Thank you!`
                }
                console.log(data)
              },
              () =>                 
              this.message = {
                show: true,
                category: "err",
                message: `Please contact jorge@sarkis.dev`
              }
            );

        },
        onCancel: (data, actions) => {
            console.log('OnCancel', data, actions);
            this.message = {
              show: true,
              category: "cancel",
              message: `You cancelled the payment. Please, contact me if you have any trouble with the payment.`
            }
        },
        onError: err => {
          this.message = {
            show: true,
            category: "err",
            message: `Seems like happened a error.`
          }
            console.log('OnError', err);
      
        },
        onClick: () => {
          
          if (this.message.category==="sucess"){
            this.message = {
              show: true,
              category: "success",
              message: `You already bougth! Are you sure that you want to buy more vip?`
            }
          } else{
            this.message = {
              show: false,
            }
          } 
        }
    };
}

  onChange(){
    const id = Number(this.selectedPlan)
    const newPlan = this.plans.find(plan => plan.id === id )
    console.log(this.selectedPlan)

    if (newPlan){
      const pricePerDay = newPlan.price/newPlan.days
      this.pricePerMonth.set(Math.ceil(pricePerDay*30))
      this.currentPlan.set(newPlan)
    }
  }
}
