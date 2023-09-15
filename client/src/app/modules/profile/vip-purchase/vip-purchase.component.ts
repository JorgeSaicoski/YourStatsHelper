import { Component, OnInit, signal } from '@angular/core';
import { Plan } from '@model/plan';
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
      price: 20
    }
  ]

  currentPlan = signal<Plan>({ 
    id: 1,
    name: "Month",
    days: 30,
    price: 5
  })

  selectedPlan: number = 1



  constructor(
    private userService: UsersService
  ) { }


  ngOnInit(): void {

  }

  onChange(){
    const id = Number(this.selectedPlan)
    const newPlan = this.plans.find(plan => plan.id === id )

    if (newPlan){
      this.currentPlan.set(newPlan)
    }
  }

  onSubmit(){
    console.log(this.currentPlan())
  }


}
