import { map, Observable, of } from 'rxjs';
import {
  AuthenticationDataService,
  LoginModel,
  RegistrationModel,
} from 'src/app/api/authentication';
import { User } from 'src/app/api/user';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthenticationDataServiceImpl extends AuthenticationDataService {
  public constructor(private httpClient: HttpClient) {
    super();
  }

  public login$(loginModel: LoginModel): Observable<User | null> {
    return this.httpClient.post<User>(`${environment.apiUrl}/login`, loginModel);
  }

  public register$(registrationModel: RegistrationModel): Observable<true> {
    return this.httpClient.post(`${environment.apiUrl}/register`, registrationModel).pipe(map(data => true));
  }
}
