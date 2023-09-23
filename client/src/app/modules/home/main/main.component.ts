import { DatePipe } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { TokenService } from '@service/auth/token.service';
import { UsersService } from '@service/users/users.service';
import { Subscription } from 'rxjs';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  private subscriptions: Subscription[] = []

  isVip:boolean = false

  user = signal<User>({
    id: 1,
    name: "",
    username: '',
    email: ''
  })

  constructor(
    private userService: UsersService,
    private tokenService: TokenService,
  ) { }

  ngOnInit(): void {
    this.userService.getCurrentUser();
    const id = this.tokenService.getIdByToken()
    if (id){
      const userSubscription = this.userService.getUserByID(id).subscribe((user)=>{
        this.user.set(user);
        this.isVip = this.userService.checkVipIsValid(user)
      })
      this.subscriptions.push(userSubscription)
    } 
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
