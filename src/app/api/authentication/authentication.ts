export const AUTHENTICATION_FEATURE_KEY = 'authentication';

export interface LoginModel {
 	id?: number;
	name?: string;
	email: string;
	password: string;
	found?: boolean;
}

export interface RegistrationModel {
  	id?: number;
	name?: string;
	email: string;
	password: string;
	found?: boolean;
}
