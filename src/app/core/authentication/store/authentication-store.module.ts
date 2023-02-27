import { AuthenticationStoreService } from 'src/app/api/authentication';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthenticationStoreServiceMock } from './service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    {
      provide: AuthenticationStoreService,
      useClass: AuthenticationStoreServiceMock,
    },
  ],
})
export class AuthenticationStoreModule {}
