import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
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
    const routerService = inject(Router)
    const logged: boolean = tokenService.isAuthenticated()
    console.log(logged)
    const id = tokenService.getIdByToken()
    if (id){
      return userService.getUserByID(id).pipe(
        map((user) => {
          if (!userService.checkVipIsValid(user)) {
            return routerService.createUrlTree(['/profile/vip-purchase']);
          } else {
            return true;
          }
        })
      );
    } else{
      return routerService.createUrlTree(['/auth/login'])
    }
    

};

