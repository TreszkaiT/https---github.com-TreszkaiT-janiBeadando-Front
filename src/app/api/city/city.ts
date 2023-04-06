import { FormGroup } from '@angular/forms';

import { Identifiable } from '../identifiable';

export interface CityModel {
  name: string;
  zip: string;
}

export type CityEntity = CityModel & Identifiable;

export type CityEntityAdd = CityModel;

export type CityEntityUpdate = Partial<CityEntity> & Identifiable;

export type CityFormParams = {
  formGroup: FormGroup;
};

export type CityTableParams = {
  cities: CityEntity[];
};
