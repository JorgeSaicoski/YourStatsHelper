import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@env';
import { Plan } from '@model/plan';
import { User } from '@model/user.model';
import { UsersService } from '@service/users/users.service';

@Component({
  selector: 'app-vip-purchase',
  templateUrl: './vip-purchase.component.html',
  styleUrls: ['./vip-purchase.component.scss']
})
export class VipPurchaseComponent implements OnInit {

  plans: Plan[] =[
    {
      id: 1,
      name: "Month",
      days: 30,
      price: 5
    },
    {
      id: 2,
      name: "Six Month",
      days: 180,
      price: 18
    },
    {
      id: 3,
      name: "Year",
      days: 365,
      price: 24
    }
  ]

  currentPlan = signal<Plan>({ 
    id: 1,
    name: "Month",
    days: 30,
    price: 5
  })

  pricePerMonth = signal<Number>(5)

  selectedPlan: number = 1

  user: User = {
    id: 0,
    name: '',
    username: '',
    email: '',

  };



  constructor(
    private userService: UsersService,
    private http: HttpClient,
    private router: Router
  ) {}


  ngOnInit(): void {
    this.userService.getCurrentUser();
    this.user = this.userService.currentUser()

  }

  onChange(){
    const id = Number(this.selectedPlan)
    const newPlan = this.plans.find(plan => plan.id === id )

    if (newPlan){
      const pricePerDay = newPlan.price/newPlan.days
      this.pricePerMonth.set(Math.ceil(pricePerDay*30))
      this.currentPlan.set(newPlan)
    }
  }

  onSubmit(){    
  

    const apiKey = environment.coinbase_api_key;
  
    const requestBody = {
      name: `Your Stats Helper VIP ${this.currentPlan().name}!`,
      description: `You are buying vip for ${this.currentPlan().days} days. The price is ${this.currentPlan().price} USD. Thank you!!!`,
      local_price: {
        amount: this.currentPlan().price.toString(),
        currency: 'USD' 
      },
      pricing_type: 'fixed_price',
      metadata: {
        user_id: this.user.id
      }
    };
  
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-CC-Api-Key': apiKey 
    })
  
    this.http.post('https://api.commerce.coinbase.com/charges', requestBody, { headers })
      .subscribe(
        (response: any) => {

          this.userService.getUserByIDAndIncreaseVip(this.user.id, this.currentPlan().days).subscribe(
            (response: any)=>{
              console.log(response)
              this.router.navigate(['/vip/thanks'])
            },
            (error) => {
              console.log(error)
              this.router.navigate(['/error-payment'])
            }
          );
  
        },
        (error: any) => {
          console.error(error)
          this.router.navigate(['/error-payment'])
      }
      );
  }


}
