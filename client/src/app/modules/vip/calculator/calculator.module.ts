import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './statistics/statistics.component';
import { CalculatorRoutingModule } from './calculator-routing.module';
import { CalculatorModule as CModule } from '../../calculator/calculator.module'


@NgModule({
  declarations: [
    StatisticsComponent
  ],
  imports: [
    CommonModule,
    CalculatorRoutingModule,
    CModule
  ]
})
export class CalculatorModule { }
