import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { VipRoutingModule } from './vip-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CalculatorModule } from '../calculator/calculator.module';



@NgModule({
  declarations: [
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    VipRoutingModule,
    CalculatorModule,
    SharedModule
  ]
})
export class VipModule { }
