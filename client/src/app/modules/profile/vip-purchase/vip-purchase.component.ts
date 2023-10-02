import { Component, OnInit, signal } from '@angular/core';
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
    private userService: UsersService
  ) { }


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
    const selectedPlan = this.currentPlan.value;
  
    // Replace with your Coinbase Commerce API Key
    const apiKey = 'YOUR_COINBASE_COMMERCE_API_KEY';
  
    const requestBody = {
      name: 'VIP Subscription',
      description: selectedPlan.name,
      local_price: {
        amount: selectedPlan.price.toString(),
        currency: 'USD' // Update currency as needed
      },
      pricing_type: 'fixed_price',
      metadata: {
        user_id: this.user.id
      }
    };
  
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-CC-Api-Key': apiKey // Set the Coinbase Commerce API Key
    });
  
    this.http.post('https://api.commerce.coinbase.com/charges', requestBody, { headers })
      .subscribe(
        (response: any) => {
          // Handle the response from Coinbase Commerce (e.g., redirect the user to a payment page)
          console.log(response);
  
          // Replace 'redirect_url' with the actual payment page URL provided in the Coinbase Commerce response
          window.location.href = response.data.hosted_url;
        },
        (error) => console.error(error)
      );
  }


}
