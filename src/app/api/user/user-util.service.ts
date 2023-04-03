import { UserEntity, UserEntityAdd, UserEntityUpdate } from 'src/app/api/user';

import { FormGroup } from '@angular/forms';

export abstract class UserUtilService {
    public abstract createEntity(formGroup: FormGroup): UserEntityAdd;
    public abstract createFormGroup(user: UserEntity | undefined): FormGroup;
    public abstract updateEntity(formGroup: FormGroup): UserEntityUpdate;
}
