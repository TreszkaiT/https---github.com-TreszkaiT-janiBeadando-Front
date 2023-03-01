import { createAction, props } from '@ngrx/store';
import { RegistrationModel } from 'src/app/api/authentication';
import { User } from 'src/app/api/user';

export const register = createAction(
  '[Registration Component] Register',
  props<{ registrationModel: RegistrationModel }>()
);
export const registerSuccess = createAction(
  '[Registration Component] Register Success'
);
export const registerFail = createAction(
  '[Registration Component] Register Fail',
  props<{ error: string }>()
);

export const login = createAction('[Login Component] Login');
export const loginSuccess = createAction(
  '[Login Component] Login Success',
  props<{ user: User }>()
);
export const loginFail = createAction(
  '[Login Component] Login Fail',
  props<{ error: string }>()
);

export const logout = createAction('[Application Component] Logout');
