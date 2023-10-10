import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  images: any[]= [{
    src:"assets/images/calculator.png",
    name:"Free Calculator",
    description:"Do statistics calculations for free."
  },
  {
    src:"assets/images/probability.png",
    name:"Probability Calculator",
    description:"Do probabilities calculations for 0.99USD."
  },
  {
    src:"assets/images/vip.png",
    name:"Explanation",
    description:"Learn how to do and what means any results."
  },
  {
    src:"assets/images/welcome.png",
    name:"Welcome Page VIP",
    description:"This is our central for VIPs users"
  }

]
}
