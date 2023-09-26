import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatisticsVipComponent } from './statistics-vip/statistics-vip.component';


const routes: Routes = [
  { path: 'stats', component: StatisticsVipComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculatorRoutingModule { }
