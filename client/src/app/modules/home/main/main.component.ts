import { Component } from '@angular/core';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  user: User = {
    id: '1',
    name: 'John Doe',
    username: 'John Doe',
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
