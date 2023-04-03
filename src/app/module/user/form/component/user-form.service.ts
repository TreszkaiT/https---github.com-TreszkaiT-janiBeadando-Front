import { combineLatest, Observable, ReplaySubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {
    UserEntity,
    UserEntityAdd,
    UserEntityUpdate,
    UserFormParams,
    UserStoreService,
    UserUtilService,
} from 'src/app/api/user';

import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class UserFormService {
    private formGroup!: FormGroup;
    private params!: UserFormParams;
    private params$$: ReplaySubject<UserFormParams>;
    private user!: UserEntity | undefined;

    public constructor(
        private activatedRoute: ActivatedRoute,
        private userStoreService: UserStoreService,
        private userUtilService: UserUtilService,

        private router: Router
    ) {
        this.params$$ = new ReplaySubject();
    }

    public cancel(): void {
        this.router.navigate(['../../list'], {
            relativeTo: this.activatedRoute,
        });
    }

    public init$(): Observable<UserFormParams> {
        return this.activatedRoute.params.pipe(
            switchMap((data) =>
                combineLatest([
                    this.userStoreService.selectEntity$(data['userId']),
                ])
            ),
            switchMap(([user]) => {
                this.user = user;
                this.formGroup = this.userUtilService.createFormGroup(user);
                this.params = this.createUserParams(this.formGroup);

                this.params$$.next(this.params);

                return this.params$$;
            })
        );
    }

    public mainImageUpload(file: File): void {
        console.log(file);
    }

    public submit(): void {
        if (this.user) {
            this.updateUser();
        } else {
            this.addUser();
        }

        this.router.navigate(['../../list'], {
            relativeTo: this.activatedRoute,
        });
    }

    private addUser(): void {
        const user: UserEntityAdd = this.userUtilService.createEntity(
            this.params.formGroup
        );

        this.userStoreService.dispatchAddEntityAction(user);
    }

    private createUserParams(formGroup: FormGroup): UserFormParams {
        const userFormParams: UserFormParams = {
            formGroup,
        };

        return userFormParams;
    }

    private updateUser(): void {
        const user: UserEntityUpdate = this.userUtilService.updateEntity(
            this.params.formGroup
        );

        this.userStoreService.dispatchUpdateEntityAction(user);
    }
}
