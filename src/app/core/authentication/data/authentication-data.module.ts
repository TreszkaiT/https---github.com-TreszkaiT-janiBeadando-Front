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
    },
  ],
})
export class AuthenticationDataModule {}
