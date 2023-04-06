import { SharedModule } from 'primeng/api';
import { CityDataService } from 'src/app/api/city';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CityDataServiceMock } from './services';

@NgModule({
  imports: [CommonModule, SharedModule],
  providers: [
    {
      provide: CityDataService,
      useClass: CityDataServiceMock,
    },
  ],
})
export class CityDataModule {}
