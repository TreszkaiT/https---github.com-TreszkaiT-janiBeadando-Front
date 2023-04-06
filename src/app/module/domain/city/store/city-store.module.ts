import { CityStoreService } from 'src/app/api/city';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { CityStoreServiceImpl } from './state/city-store.service.impl';
import { CityEffects } from './state/city.effects';
import * as fromCity from './state/city.reducer';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature(fromCity.USER_FEATURE_KEY, fromCity.reducer),
        EffectsModule.forFeature([CityEffects]),
    ],
    providers: [
        {
            provide: CityStoreService,
            useClass: CityStoreServiceImpl,
        },
    ],
})
export class CityStoreModule {}
