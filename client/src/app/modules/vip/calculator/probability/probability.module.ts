import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IndependentComponent } from './independent/independent.component';
import { ProbabilityRoutingModule } from './probability-routing.module';
import { ProbabilityPageComponent } from './probability-page/probability-page.component';



@NgModule({
  declarations: [
    IndependentComponent,
    ProbabilityPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProbabilityRoutingModule
  ]
})
export class ProbabilityModule { }
