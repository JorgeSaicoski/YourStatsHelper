import { Component } from '@angular/core';
import { IMessage } from '@model/message.model';


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
  kind:string = "get_number_once"
  message: IMessage ={
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

    switch(this.kind) { 
        case "get_number_once": { 
          this.probability = -(Math.pow(-(singlePossibility-1), this.numberOfEvents)-1) * 100 
            break; 
        } 
        case "in_row": { 
          this.probability = Math.pow(singlePossibility, this.numberOfEvents) * 100
            break; 
        } 
        default: { 
          this.probability = singlePossibility * 100
            break; 
        } 
      }
    ;
    if (this.probability < 0){
      this.message ={
        show:true,
        category:"error",
        message:"You have used negatives values, please ignore the '-' signal"

      } 

    }else{
      this.message.show = false
    }
  }

}
