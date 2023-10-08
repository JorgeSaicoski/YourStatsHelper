import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IndependentComponent } from './independent/independent.component';
import { ProbabilityRoutingModule } from './probability-routing.module';
import { ProbabilityPageComponent } from './probability-page/probability-page.component';
import { DependentComponent } from './dependent/dependent.component';
import { PermutationComponent } from './permutation/permutation.component';



@NgModule({
  declarations: [
    IndependentComponent,
    ProbabilityPageComponent,
    DependentComponent,
    PermutationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProbabilityRoutingModule
  ]
})
export class ProbabilityModule { }
