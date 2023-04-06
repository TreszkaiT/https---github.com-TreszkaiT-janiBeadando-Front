import { CityEntity } from 'src/app/api/city';

import { Dictionary } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State, USER_FEATURE_KEY, cityAdapter } from './city.reducer';

export const getCityState = createFeatureSelector<State>(USER_FEATURE_KEY);

const { selectAll, selectEntities } = cityAdapter.getSelectors();

export const getCityLoading = createSelector(
    getCityState,
    (state: State) => state.loading
);

export const getCityError = createSelector(
    getCityState,
    (state: State) => state.error
);

export const getAllCity = createSelector(getCityState, (state: State) =>
    selectAll(state)
);

export const getCityEntities = createSelector(getCityState, (state: State) =>
    selectEntities(state)
);

export const getSelectedId = createSelector(
    getCityState,
    (state: State) => state.selectedId || ''
);

export const isNewEntityButtonEnabled = createSelector(
	getCityState,
	(state: State) => state.isNewEntityButtonEnabled
);

export const selectCity = createSelector(
    getCityEntities,
    getSelectedId,
    (entities, selectedId) => entities[selectedId]
);

export const selectCityById = (id: string) =>
    createSelector(getCityEntities, (cityEntities: Dictionary<CityEntity>) => {
        return cityEntities[id];
    });
