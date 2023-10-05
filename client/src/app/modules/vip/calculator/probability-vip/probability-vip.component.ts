import { Component } from '@angular/core';
import { Message } from '@model/message.model';


@Component({
  selector: 'app-probability-vip',
  templateUrl: './probability-vip.component.html',
  styleUrls: ['./probability-vip.component.scss']
})
export class ProbabilityVipComponent {
  possibilities:number = 0;
  probability:number = 0;
  possibilities_wanted:number = 1;
  message: Message ={
    show:false
  }
  calculateProbability(){
    if (this.possibilities<this.possibilities_wanted){
      alert("The number of possibilities can't be smaller than the wanted possiblities");
    }
    this.probability = (this.possibilities_wanted/this.possibilities)*100
    if (this.probability < 0){
      this.message ={
        show:true,
        category:"error",
        message:'You used negative numbers, so you will need to ignore the "-" signal'

      }
    }
  }

}
