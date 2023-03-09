import { AuthenticationStoreService } from 'src/app/api/authentication';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthenticationStoreServiceImpl } from './service/authentication-store.service.impl';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    {
      provide: AuthenticationStoreService,
      useClass: AuthenticationStoreServiceImpl,      //  AuthenticationDataServiceMock -- mockot, vagy Implementációt használjon
    },
  ],
})
export class AuthenticationStoreModule {}
