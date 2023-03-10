import { Observable, of } from 'rxjs';
import {
  AuthenticationDataService,
  LoginModel,
  RegistrationModel,
} from 'src/app/api/authentication';
import { User } from 'src/app/api/user';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationDataServiceMock extends AuthenticationDataService {
  private user!: User | null;

  public constructor(
    private httpClient: HttpClient,
  ) {
    super();
  }

  public login$(loginModel: LoginModel): Observable<User | null> {
    const loggedIn = this.user
      ? this.user.email === loginModel.email
      : false;

    return of(loggedIn ? loginModel as User : null);
  }

  public register$(registrationModel: RegistrationModel): Observable<true> {
    this.user = {
      ...registrationModel,
      id: 1234
    };

    return of(true);
  }
}
