import { Observable, of } from 'rxjs';
import {
  AuthenticationDataService,
  AuthenticationStoreService,
  LoginModel,
  RegistrationModel,
} from 'src/app/api/authentication';
import { User } from 'src/app/api/user';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationDataServiceMock extends AuthenticationDataService {
  public constructor(
    private httpClient: HttpClient,
    private authenticationStoreService: AuthenticationStoreService
  ) {
    super();
  }

  public login$(loginModel: LoginModel): Observable<User | null> {
    const loggedIn = this.authenticationStoreService.user
      ? this.authenticationStoreService.user.email === loginModel.email
      : false;

    return of(loggedIn ? loginModel : null);
  }

  public register$(registrationModel: RegistrationModel): Observable<true> {
    this.authenticationStoreService.user = {
      email: registrationModel.email,
    };

    return of(true);
  }
}
