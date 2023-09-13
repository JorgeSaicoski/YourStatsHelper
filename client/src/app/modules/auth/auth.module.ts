import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthRoutingModule } from './auth-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers:[
    JwtHelperService
  ]
})
export class AuthModule { }
