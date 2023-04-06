import { Observable } from 'rxjs';

import { CityEntity, CityEntityAdd, CityEntityUpdate } from './city';

export abstract class CityStoreService {
    public abstract dispatchAddEntityAction(city: CityEntityAdd): void;
    public abstract dispatchChangeNewEntityButtonEnabled(
        enabled: boolean
    ): void;
    public abstract dispatchGetEntityAction(id: string): void;
    public abstract dispatchListEntitiesAction(): void;
    public abstract dispatchUpdateEntityAction(city: CityEntityUpdate): void;
    public abstract selectEntity$(
        id: string
    ): Observable<CityEntity | undefined>;
    public abstract selectEntityList$(): Observable<CityEntity[]>;
    public abstract selectNewEntityButtonEnabled$(): Observable<boolean>;
}
