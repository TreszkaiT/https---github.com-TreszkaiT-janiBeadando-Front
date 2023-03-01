import { createReducer, on } from '@ngrx/store';
import * as actions from './authentication.action';
import { User } from 'src/app/api/user';

export interface AuthenticationState { authenticatedUser: User | null; error: string | null };

export const initialState: AuthenticationState = { authenticatedUser: null, error: null };

export const authenticationReducer = createReducer(
  initialState,
  on(actions.registerSuccess, (state) => state),
  on(actions.registerFail, (state, { error }) => {
    return {
        ...state,
        error
    }
  }),
  on(actions.loginSuccess, (state, { user }) => {
    return {
        ...state,
        authenticatedUser: user
    }
  }),
  on(actions.loginFail, (state, { error }) => {
    return {
        ...state,
        error
    }
  }),
);