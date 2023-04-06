import { Observable, of } from 'rxjs';
import {
    CityDataService,
    CityEntity,
    CityEntityAdd,
    CityEntityUpdate,
} from 'src/app/api/city';
import { v4 as uuidv4 } from 'uuid';

import { Injectable } from '@angular/core';

@Injectable()
export class CityDataServiceMock extends CityDataService {
    private cityMap: Map<string, CityEntity> = new Map<string, CityEntity>();

    public add$(city: CityEntityAdd): Observable<CityEntity> {
        const id = uuidv4();
        const cityEntity: CityEntity = {
            ...city,
            id,
        };

        this.cityMap.set(id, cityEntity);

        return of(cityEntity);
    }

    public get$(id: string): Observable<CityEntity | undefined> {
        return of(this.cityMap.get(id));
    }

    public list$(): Observable<CityEntity[]> {
        return of(Array.from(this.cityMap.values()));
    }

    public update$(city: CityEntityUpdate): Observable<CityEntityUpdate> {
        const cityEntity = this.cityMap.get(city.id);
        let updatedCity: CityEntity;

        if (!cityEntity) {
            throw new Error('City is not existed!');
        } else {
            updatedCity = {
                ...cityEntity,
                ...city,
            };
        }

        this.cityMap.set(updatedCity.id || '', updatedCity);

        return of(updatedCity as CityEntityUpdate);
    }
}
