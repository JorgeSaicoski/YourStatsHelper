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
    this.userService.getUserByIDAndIncreaseVip(this.user.id, this.currentPlan().days).subscribe(
      (response: any)=>{
        console.log(response)
      },
      (error) => console.log(error)
    );
  }


}
