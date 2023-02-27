import { Observable, of } from 'rxjs';
import { AuthenticationStoreService } from 'src/app/api/authentication';
import { User } from 'src/app/api/user';

import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationStoreServiceMock extends AuthenticationStoreService {
  public getUser$(): Observable<User | null> {
    return of(this.user);
  }

  public isLoggedIn$(): Observable<boolean> {
    return of(!!this.user);
  }
}
