import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { vipGuard } from './guards/vip.guard';
import { TermsComponent } from './shared/terms/terms.component';
import { PrivacyComponent } from './shared/privacy/privacy.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'calculator',
    loadChildren: () =>
      import('./modules/calculator/calculator.module').then((m) => m.CalculatorModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./modules/profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'vip',
    canActivate:[
      vipGuard
    ],
    loadChildren: () =>
      import('./modules/vip/vip.module').then((m) => m.VipModule),
  },
  { path: 'termsconditions', component: TermsComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
