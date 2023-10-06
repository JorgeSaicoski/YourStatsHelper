import { Component } from '@angular/core';
import { Message } from '@model/message.model';


@Component({
  selector: 'app-probability-vip',
  templateUrl: './probability-vip.component.html',
  styleUrls: ['./probability-vip.component.scss']
})
export class ProbabilityVipComponent {
  possibilities:number = 1;
  numberOfEvents:number = 1;
  probability:number = 0;
  possibilities_wanted:number = 1;
  message: Message ={
    show:false
  }
  calculateProbability(){
    if (this.possibilities<this.possibilities_wanted){
      this.message ={
        show:true,
        category:"error",
        message:"The number of possibilities can't be smaller than the wanted possiblities"

      }
     return;
    }
    const singlePossibility = this.possibilities_wanted/this.possibilities
    console.log(Math.pow(-(singlePossibility-1), this.numberOfEvents))
    this.probability = -(Math.pow(-(singlePossibility-1), this.numberOfEvents)-1) * 100;
    if (this.probability < 0){
      this.probability = -this.probability

    }
  }

}
