import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatisticsVipComponent } from './statistics-vip/statistics-vip.component';
import { ProbabilityVipComponent } from './probability-vip/probability-vip.component';


const routes: Routes = [
  { path: 'stats', component: StatisticsVipComponent },
  { path:'probability', component: ProbabilityVipComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculatorRoutingModule { }
