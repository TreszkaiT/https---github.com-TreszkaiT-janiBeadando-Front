import { AuthenticationDataService } from 'src/app/api/authentication';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthenticationDataServiceMock } from './service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    {
      provide: AuthenticationDataService,
      useClass: AuthenticationDataServiceMock,
      // I use mock service because I don't have backend application.
      // Please use real service instead at your development environment.
      //  AuthenticationDataServiceMock -- mockot, vagy Implementációt használjon
    },
  ],
})
export class AuthenticationDataModule {}
