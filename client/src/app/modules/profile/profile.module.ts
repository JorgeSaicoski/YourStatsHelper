import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VipPurchaseComponent } from './vip-purchase/vip-purchase.component';
import { EditComponent } from './edit/edit.component';
import { ProfileRoutingModule } from './profile-routing.module';



@NgModule({
  declarations: [
    VipPurchaseComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }