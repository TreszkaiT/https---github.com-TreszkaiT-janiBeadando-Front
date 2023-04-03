import {
    UserEntity,
    UserEntityAdd,
    UserEntityUpdate,
    UserUtilService,
} from 'src/app/api/user';

import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class UserUtilServiceImpl extends UserUtilService {
    public _sort = (a: UserEntity, b: UserEntity): number =>
        a.email < b.email ? 1 : -1;

    public constructor(private formBuilder: FormBuilder) {
        super();
    }

    public createEntity(formGroup: FormGroup): UserEntityAdd {
        return {
            lastName: formGroup.value['lastName'],
            email: formGroup.value['email'],
            firstName: (formGroup.value['firstName'] as string).trim(),
        };
    }

    public createFormGroup(user: UserEntity | undefined): FormGroup {
        return this.formBuilder.group({
            lastName: [user?.lastName, Validators.required],
            email: [user?.email, Validators.required],
            firstName: [user?.firstName, Validators.required],
            id: [user?.id],
        });
    }

    public updateEntity(formGroup: FormGroup): UserEntityUpdate {
        return {
            lastName: formGroup.value['lastName'],
            email: formGroup.value['email'],
            firstName: (formGroup.value['firstName'] as string).trim(),
            id: formGroup.value['id'],
        };
    }
}
