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
  }]
}
