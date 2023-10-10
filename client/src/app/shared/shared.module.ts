import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavAdminComponent } from './nav-admin/nav-admin.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';



@NgModule({
  declarations: [
    NotFoundComponent,
    NavAdminComponent,
    FooterComponent,
    TermsComponent,
    PrivacyComponent
  ],
  exports:[
    NotFoundComponent,
    NavAdminComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
