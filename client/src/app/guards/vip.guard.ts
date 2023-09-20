import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { UsersService } from '@service/users/users.service';


export const vipGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const user = inject(UsersService)
  console.log(route, state)
  return user.checkVipIsValid() ?
    true
    :
    inject(Router).createUrlTree(['/profile/vip-purchase'])
    ;
};

