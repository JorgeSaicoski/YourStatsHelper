import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavAdminComponent } from './nav-admin/nav-admin.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    NotFoundComponent,
    NavAdminComponent,
    FooterComponent
  ],
  exports:[
    NotFoundComponent,
    NavAdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
