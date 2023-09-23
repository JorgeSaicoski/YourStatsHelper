import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { TokenService } from '@service/auth/token.service';
import { UsersService } from '@service/users/users.service';
import { Observable, map } from 'rxjs';


export const noVipGuard: CanActivateFn =  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
:
  Observable<boolean | UrlTree> 
  | Promise<boolean | UrlTree> 
  | boolean 
  | UrlTree=> {
    const userService = inject(UsersService)
    const tokenService = inject(TokenService)
    const routerService = inject(Router)
    const id = tokenService.getIdByToken()
    if (id){
      return userService.getUserByID(id).pipe(
        map((user) => {
          if (userService.checkVipIsValid(user)) {
            return routerService.createUrlTree(['/vip']);
          } else {
            return true;
          }
        })
      );
    } else{
      return routerService.createUrlTree(['/auth/login'])
    }
    

};

