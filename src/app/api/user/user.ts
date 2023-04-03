import { FormGroup } from '@angular/forms';
  id: number;
	name?: string;

export interface UserModel {
    displayName?: string;
    email: string;
    password: string;
    lastName: string;
}

export type UserEntity = UserModel & Identifiable;

export type UserEntityAdd = UserModel;

export type UserEntityUpdate = Partial<UserEntity> & Identifiable;

export type UserFormParams = {
    formGroup: FormGroup;
};

export type UserTableParams = {
    users: UserEntity[];
    empty: string[];
};
