import { Observable, of } from 'rxjs';
import { AuthenticationStoreService, LoginModel, RegistrationModel } from 'src/app/api/authentication';
import { User } from 'src/app/api/user';

import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationStoreServiceImpl extends AuthenticationStoreService {
  public dispatchLogin(loginModel: LoginModel): void {
    throw new Error('Method not implemented.');
  }
  public dispatchRegistrationAction(registrationModel: RegistrationModel): void {
    throw new Error('Method not implemented.');
  }
  public isLoggedIn$(): Observable<boolean> {    
    throw new Error('Method not implemented.');
  }
  public selectAuthenticatedUser$(): Observable<User | null> {
  }
}
