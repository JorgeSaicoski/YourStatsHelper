import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { MainComponent } from './main/main.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UsersService } from '@service/users/users.service';





@NgModule({
  declarations: [
    WelcomeComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule {
  constructor(
    userService:UsersService
  ){
    userService.getCurrentUser()
  }
}
