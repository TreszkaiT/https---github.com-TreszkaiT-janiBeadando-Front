import { AuthenticationStoreService } from 'src/app/api/authentication';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AuthenticationStoreServiceImpl } from './service/authentication-store.service.impl';
import { authenticationReducer } from './state/authentication.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('authentication', authenticationReducer),
  ],
  providers: [
    {
      provide: AuthenticationStoreService,
      useClass: AuthenticationStoreServiceImpl,      //  AuthenticationDataServiceMock -- mockot, vagy Implementációt használjon
    },
  ],
})
export class AuthenticationStoreModule {}
