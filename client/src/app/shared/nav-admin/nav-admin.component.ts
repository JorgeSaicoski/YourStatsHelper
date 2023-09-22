import { Component } from '@angular/core';

@Component({
  selector: 'nav-admin',
  templateUrl: './nav-admin.component.html',
  styleUrls: ['./nav-admin.component.scss']
})
export class NavAdminComponent {
  activated:number = 0

  changeVisibility(navItem:number){
    const current = this.activated
    if(navItem === current){
      this.activated = 0
    }else{
      this.activated = navItem
    }
  }
}
