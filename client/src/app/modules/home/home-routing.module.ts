import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { MainComponent } from './main/main.component';
import { noVipGuard } from 'src/app/guards/noVip.guard ';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  {
    path: 'main',
    canActivate: [
      noVipGuard
    ]
    , component: MainComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
