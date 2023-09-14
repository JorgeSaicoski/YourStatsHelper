import { Component, OnInit } from '@angular/core';
import { UsersService } from '@service/users/users.service';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  isVip:boolean = false

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
    this.userService.getCurrentUser();
    this.userService.currentUser.subscribe((user: User) => {
      this.user = user;
    });
    this.isVip = this.userService.checkVipIsValid()
  }
}
