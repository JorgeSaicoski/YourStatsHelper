import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { User } from '@model/user.model';
import { TokenService } from '@service/auth/token.service';
import { UsersService } from '@service/users/users.service';
import { Observable, map } from 'rxjs';


export const vipGuard: CanActivateFn =  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
:
  Observable<boolean | UrlTree> 
  | Promise<boolean | UrlTree> 
  | boolean 
  | UrlTree=> {
    const userService = inject(UsersService)
    const tokenService = inject(TokenService)
    const logged: boolean = tokenService.isAuthenticated()
    const id = tokenService.getIdByToken()
    if (id){
      return userService.getUserByID(id).pipe(
        map(user => userService.checkVipIsValid(user) ? true : false)
        );
    } else{
      return logged?inject(Router).createUrlTree(['/profile/vip-purchase']):inject(Router).createUrlTree(['/auth/login'])
    }
    

};

