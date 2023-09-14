import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VipPurchaseComponent } from './vip-purchase/vip-purchase.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
  { path: '', component: EditComponent },
  { path: 'vip-purchase', component: VipPurchaseComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
