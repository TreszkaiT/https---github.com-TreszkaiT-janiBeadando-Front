import { AuthenticationDataService } from 'src/app/api/authentication';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthenticationDataServiceImpl } from './service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    {
      provide: AuthenticationDataService,
      useClass: AuthenticationDataServiceImpl,      //  AuthenticationDataServiceMock -- mockot, vagy Implementációt használjon
    },
  ],
})
export class AuthenticationDataModule {}
