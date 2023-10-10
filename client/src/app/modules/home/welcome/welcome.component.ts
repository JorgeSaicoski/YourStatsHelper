import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  items: any[] = [{
    src: "",
    description: "teste"
  },
  {
    src: "",
    description: "teste"
  },
  {
    src: "",
    description: "teste"
  }
]; 
  currentIndex: number = 0; 

  
  nextItem() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
  }

  prevItem() {
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
  }
  slideTo(i:number){
    this.currentIndex = i - 1
  }
}
