import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CityDataModule } from './data';
import { CityStoreModule } from './store';
import { CityUtilModule } from './util';

@NgModule({
    imports: [CommonModule, CityDataModule, CityStoreModule, CityUtilModule],
})
export class CityModule {}
