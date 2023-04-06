import { CityEntity } from 'src/app/api/city';

import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import * as cityActions from './city.actions';

export const USER_FEATURE_KEY = 'city';

export interface State extends EntityState<CityEntity> {
    isNewEntityButtonEnabled: boolean;
    selectedId?: string;
    loading: boolean;
    error?: string | null;
}

export interface CityPartialState {
    readonly [USER_FEATURE_KEY]: State;
}

export const cityAdapter: EntityAdapter<CityEntity> =
    createEntityAdapter<CityEntity>({
        selectId: (model: CityEntity) => model.id,
    });

export const initialState: State = cityAdapter.getInitialState({
    isNewEntityButtonEnabled: true,
    loading: false,
});

const cityReducer = createReducer(
    initialState,
    on(cityActions.addCity, (state) => ({
        ...state,
        loading: false,
        error: null,
    })),
    on(cityActions.addCitySuccess, (state, { city }) =>
        cityAdapter.addOne(city, { ...state, loading: true })
    ),
    on(cityActions.addCityFail, (state, { error }) => ({ ...state, error })),
    on(cityActions.changeNewEntityButtonEnabled, (state, { enabled }) => ({
        ...state,
        isNewEntityButtonEnabled: enabled,
    })),
    on(cityActions.getCity, (state) => ({
        ...state,
        loading: false,
        error: null,
    })),
    on(cityActions.getCitySuccess, (state, { city }) => {
        if (city) {
            return cityAdapter.upsertOne(city, { ...state, loading: false });
        } else {
            return state;
        }
    }),
    on(cityActions.getCityFail, (state, { error }) => ({ ...state, error })),
    on(cityActions.listCitys, (state) => ({
        ...state,
        loading: false,
        error: null,
    })),
    on(cityActions.listCitysSuccess, (state, { citys }) =>
        cityAdapter.upsertMany(citys, { ...state, loading: true })
    ),
    on(cityActions.listCitysFail, (state, { error }) => ({ ...state, error })),
    on(cityActions.updateCitySuccess, (state, { city }) =>
        cityAdapter.updateOne(city, state)
    ),
    on(cityActions.updateCityFail, (state, { error }) => ({ ...state, error }))
);

export function reducer(state: State | undefined, action: Action) {
    return cityReducer(state, action);
}
