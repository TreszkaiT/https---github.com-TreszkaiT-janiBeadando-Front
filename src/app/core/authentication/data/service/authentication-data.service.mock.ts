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
  public constructor(private httpClient: HttpClient) {
    super();
  }

  public login$(loginModel: LoginModel): Observable<User | null> {
    return of({
        email: 'test@gmail.com'
    });
  }

  public register$(registrationModel: RegistrationModel): Observable<true> {
    return of(true);
  }
}
