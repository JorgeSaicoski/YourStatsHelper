import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndependentComponent } from './independent/independent.component';
import { ProbabilityPageComponent } from './probability-page/probability-page.component';




const routes: Routes = [
  { path: 'independent', component: IndependentComponent },
  { path: '', component: ProbabilityPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProbabilityRoutingModule { }
