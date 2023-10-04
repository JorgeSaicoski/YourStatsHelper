import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VipPurchaseComponent } from './vip-purchase/vip-purchase.component';
import { EditComponent } from './edit/edit.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { FormsModule } from '@angular/forms';
import { NgxPayPalModule } from 'ngx-paypal';


@NgModule({
  declarations: [
    VipPurchaseComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
    NgxPayPalModule
  ]
})
export class ProfileModule { }
