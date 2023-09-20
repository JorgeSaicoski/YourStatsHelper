import { Component, OnInit, signal } from '@angular/core';
import { TokenService } from '@service/auth/token.service';
import { UsersService } from '@service/users/users.service';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  isVip:boolean = false

  user = signal<User>({
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
    this.userService.getCurrentUser();
    this.isVip = this.userService.checkVipIsValid()
    const id = this.tokenService.getIdByToken()
    if (id){
      console.log("id")
      console.log(id)
      this.userService.getUserByID(id).subscribe((user)=>{
        console.log(user)
        console.log("user")
        this.user.set(user);
      })
    } 
  }
}
