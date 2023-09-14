import { Component } from '@angular/core';
import { UsersService } from '@service/users/users.service';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  user: User = {
    id: '',
    name: '',
    username: '',
    email: '',

  };

  constructor(
    private userService: UsersService
  ) { }

  ngOnInit(): void {
    const currentUser = this.userService.getCurrentUser();
    if (currentUser !== null) {
      this.user = currentUser;
    } 
    console.log(this.user)
  }
  checkIfIsVip(user: User): boolean {
    if (user.expireVipIn && user.expireVipIn >= new Date()) {
      return true; 
    }
    return false; 
  }
}
