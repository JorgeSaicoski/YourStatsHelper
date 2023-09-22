import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavAdminComponent } from './nav-admin/nav-admin.component';



@NgModule({
  declarations: [
    NotFoundComponent,
    NavAdminComponent
  ],
  exports:[
    NotFoundComponent,
    NavAdminComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
