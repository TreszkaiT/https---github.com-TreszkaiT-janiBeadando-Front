import { catchError, map, Observable, of } from 'rxjs';
import { AuthenticationStoreService } from 'src/app/api/authentication';

import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable()
export class AdminPageGuard implements CanActivate {
  constructor(private authenticationStoreService: AuthenticationStoreService, private router: Router) {}

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authenticationStoreService.isLoggedIn$().pipe(
      map((e) => {
        if (e) {
          return true;
        } else {
            this.router.navigateByUrl('/login');
          return false;
        }
      })
    );
  }
}
