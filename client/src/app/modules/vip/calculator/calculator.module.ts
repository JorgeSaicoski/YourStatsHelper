import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsVipComponent } from './statistics-vip/statistics-vip.component';
import { CalculatorRoutingModule } from './calculator-routing.module';
import { CalculatorModule as CModule } from '../../calculator/calculator.module';
import { ProbabilityVipComponent } from './probability-vip/probability-vip.component'
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StatisticsVipComponent,
    ProbabilityVipComponent
  ],
  imports: [
    CommonModule,
    CalculatorRoutingModule,
    FormsModule,
    CModule
  ]
})
export class CalculatorModule { }
