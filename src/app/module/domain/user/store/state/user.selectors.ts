import { UserEntity } from 'src/app/api/user';

import { Dictionary } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State, USER_FEATURE_KEY, userAdapter } from './user.reducer';

export const getUserState = createFeatureSelector<State>(USER_FEATURE_KEY);

const { selectAll, selectEntities } = userAdapter.getSelectors();

export const getUserLoading = createSelector(
    getUserState,
    (state: State) => state.loading
);

export const getUserError = createSelector(
    getUserState,
    (state: State) => state.error
);

export const getAllUser = createSelector(getUserState, (state: State) =>
    selectAll(state)
);

export const getUserEntities = createSelector(getUserState, (state: State) =>
    selectEntities(state)
);

export const getSelectedId = createSelector(
    getUserState,
    (state: State) => state.selectedId || ''
);

export const isNewEntityButtonEnabled = createSelector(
	getUserState,
	(state: State) => state.isNewEntityButtonEnabled
);

export const selectUser = createSelector(
    getUserEntities,
    getSelectedId,
    (entities, selectedId) => entities[selectedId]
);

export const selectUserById = (id: string) =>
    createSelector(getUserEntities, (userEntities: Dictionary<UserEntity>) => {
        return userEntities[id];
    });