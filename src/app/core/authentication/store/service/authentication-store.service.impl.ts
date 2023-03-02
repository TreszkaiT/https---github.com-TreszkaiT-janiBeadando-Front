import { Observable } from 'rxjs';
import { AuthenticationStoreService } from 'src/app/api/authentication';
import { User } from 'src/app/api/user';

import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationStoreServiceImpl extends AuthenticationStoreService {
  public getUser$(): Observable<User | null> {
    throw new Error('Method not implemented.');
  }

  public isLoggedIn$(): Observable<boolean> {
    throw new Error('Method not implemented.');
  }
}
