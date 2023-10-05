import { Component } from '@angular/core';


@Component({
  selector: 'app-probability-vip',
  templateUrl: './probability-vip.component.html',
  styleUrls: ['./probability-vip.component.scss']
})
export class ProbabilityVipComponent {
  possibilities:number = 0;
  probability:number = 0;
  calculateProbability(){
    this.probability = (1/this.possibilities)*100
  }

}
