import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndependentComponent } from './independent/independent.component';
import { ProbabilityPageComponent } from './probability-page/probability-page.component';
import { DependentComponent } from './dependent/dependent.component';
import { PermutationComponent } from './permutation/permutation.component';




const routes: Routes = [
  { path: 'independent', component: IndependentComponent },
  { path: 'dependent', component: DependentComponent },
  { path: 'permutation', component: PermutationComponent },
  { path: '', component: ProbabilityPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProbabilityRoutingModule { }
