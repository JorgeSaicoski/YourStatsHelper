import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './statistics/statistics.component';
import { FormsModule } from '@angular/forms';
import { CalculatorRoutingModule } from './calculator-routing.module';



@NgModule({
  declarations: [
    StatisticsComponent
  ],
  imports: [
    CommonModule,
    CalculatorRoutingModule,
    FormsModule
  ]
})
export class CalculatorModule { }
