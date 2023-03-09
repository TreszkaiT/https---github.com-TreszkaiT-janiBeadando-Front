import { Observable, of } from 'rxjs';
import { AuthenticationDataService, AuthenticationStoreService } from 'src/app/api/authentication';
import { User } from 'src/app/api/user';

import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationStoreServiceImpl extends AuthenticationStoreService {
  constructor(private authenticationDataService: AuthenticationDataService){
    super();
  }

  public getUser$(): Observable<User | null> {
    throw new Error('Method not implemented.');
  }

  public isLoggedIn$(): Observable<boolean> {    
    return of(!!this.authenticationDataService.authenticatedUser);      // !! = mindennél false, kivéve ha Objektum, User akkor true |||  of() Observable-ba teszi bele Observable<true> v. false lesz
  }
}
