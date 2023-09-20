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
    id: 0,
    name: '',
    username: '',
    email: '',

  };

  constructor(
    private userService: UsersService
  ) { }

  ngOnInit(): void {
    this.userService.getCurrentUser();
    this.user = this.userService.currentUser()
    this.isVip = this.userService.checkVipIsValid()
  }
}
