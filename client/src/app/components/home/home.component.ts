import { Component } from '@angular/core';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  user: User = {
    id: '1',
    name: 'John Doe',
    email: 'johndoe@example.com',
    expireVipIn: new Date('2023-12-31')
  };

  constructor() { }

  ngOnInit(): void {

  }
  checkIfIsVip(user: User): boolean {
    if (user.expireVipIn && user.expireVipIn >= new Date()) {
      return true; 
    }
    return false; 
  }
}
