import { FormGroup } from '@angular/forms';

import { Identifiable } from '../identifiable';

export interface UserModel {
    displayName?: string;
    email: string;
    firstName: string;
    language?: string;
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
