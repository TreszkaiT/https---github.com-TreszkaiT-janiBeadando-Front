import { Observable } from 'rxjs';

import { CityEntity, CityEntityAdd, CityEntityUpdate } from './city';

export abstract class CityDataService {
    public abstract add$(city: CityEntityAdd): Observable<CityEntity>;
    public abstract get$(id: string): Observable<CityEntity | undefined>;
    public abstract list$(): Observable<CityEntity[]>;
    public abstract update$(
        entity: CityEntityUpdate
    ): Observable<CityEntityUpdate>;
}
