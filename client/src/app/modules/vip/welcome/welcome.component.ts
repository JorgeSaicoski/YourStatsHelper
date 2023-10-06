import { Component, OnInit, signal } from '@angular/core';
import { IUser } from 'src/app/interfaces/user.model';
import { TokenService } from '@service/auth/token.service';
import { UsersService } from '@service/users/users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})


export class WelcomeComponent implements OnInit {

  private subscriptions: Subscription[] = []

  user = signal<IUser>({
    id: 1,
    name: "",
    username: '',
    email: ''
  })

  constructor(
    private userService: UsersService,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    const id = this.tokenService.getIdByToken()
    if (id){
      const userSubscription = this.userService.getUserByID(id).subscribe((user)=>{
        this.user.set(user);
      })
      this.subscriptions.push(userSubscription)
    } 
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
