import { UserEntity } from 'src/app/api/user';

import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import * as userActions from './user.actions';

export const USER_FEATURE_KEY = 'user';

export interface State extends EntityState<UserEntity> {
    isNewEntityButtonEnabled: boolean;
    selectedId?: string;
    loading: boolean;
    error?: string | null;
}

export interface UserPartialState {
    readonly [USER_FEATURE_KEY]: State;
}

export const userAdapter: EntityAdapter<UserEntity> =
    createEntityAdapter<UserEntity>({
        selectId: (model: UserEntity) => model.id,
    });

export const initialState: State = userAdapter.getInitialState({
    isNewEntityButtonEnabled: true,
    loading: false,
});

const userReducer = createReducer(
    initialState,
    on(userActions.addUser, (state) => ({
        ...state,
        loading: false,
        error: null,
    })),
    on(userActions.addUserSuccess, (state, { user }) =>
        userAdapter.addOne(user, { ...state, loading: true })
    ),
    on(userActions.addUserFail, (state, { error }) => ({ ...state, error })),
    on(userActions.changeNewEntityButtonEnabled, (state, { enabled }) => ({
        ...state,
        isNewEntityButtonEnabled: enabled,
    })),
    on(userActions.getUser, (state) => ({
        ...state,
        loading: false,
        error: null,
    })),
    on(userActions.getUserSuccess, (state, { user }) => {
        if (user) {
            return userAdapter.upsertOne(user, { ...state, loading: false });
        } else {
            return state;
        }
    }),
    on(userActions.getUserFail, (state, { error }) => ({ ...state, error })),
    on(userActions.listUsers, (state) => ({
        ...state,
        loading: false,
        error: null,
    })),
    on(userActions.listUsersSuccess, (state, { users }) =>
        userAdapter.upsertMany(users, { ...state, loading: true })
    ),
    on(userActions.listUsersFail, (state, { error }) => ({ ...state, error })),
    on(userActions.updateUserSuccess, (state, { user }) =>
        userAdapter.updateOne(user, state)
    ),
    on(userActions.updateUserFail, (state, { error }) => ({ ...state, error }))
);

export function reducer(state: State | undefined, action: Action) {
    return userReducer(state, action);
}
