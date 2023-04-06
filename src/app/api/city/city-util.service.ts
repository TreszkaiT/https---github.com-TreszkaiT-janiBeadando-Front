import { CityEntity, CityEntityAdd, CityEntityUpdate } from './city';

import { FormGroup } from '@angular/forms';

export abstract class CityUtilService {
    public abstract createEntity(formGroup: FormGroup): CityEntityAdd;
    public abstract createFormGroup(city: CityEntity | undefined): FormGroup;
    public abstract updateEntity(formGroup: FormGroup): CityEntityUpdate;
}
