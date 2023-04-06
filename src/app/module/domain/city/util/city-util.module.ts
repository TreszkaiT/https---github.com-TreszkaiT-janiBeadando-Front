import { CityUtilService } from 'src/app/api/city';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { CityUtilServiceImpl } from './service';

@NgModule({
    declarations: [],
    imports: [CommonModule, ReactiveFormsModule],
    providers: [
        {
            provide: CityUtilService,
            useClass: CityUtilServiceImpl,
        },
    ],
})
export class CityUtilModule {}
