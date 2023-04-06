import { Observable } from 'rxjs';
import {
    UserEntity,
    UserEntityAdd,
    UserEntityUpdate,
    UserStoreService,
} from 'src/app/api/user';

import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as userActions from './user.actions';
import * as fromUser from './user.reducer';
import * as UserSelectors from './user.selectors';

@Injectable()
export class UserStoreServiceImpl extends UserStoreService {
    public constructor(private store: Store<fromUser.UserPartialState>) {
        super();
    }

    public dispatchAddEntityAction(user: UserEntityAdd): void {
        this.store.dispatch(userActions.addUser({ user }));
    }

    public dispatchChangeNewEntityButtonEnabled(enabled: boolean): void {
		this.store.dispatch(
			userActions.changeNewEntityButtonEnabled({ enabled })
		);
	} 

    public override dispatchGetEntityAction(id: string): void {
        this.store.dispatch(userActions.getUser({ id }));
    }

    public dispatchListEntitiesAction(): void {
        this.store.dispatch(userActions.listUsers());
    }

    public dispatchUpdateEntityAction(user: UserEntityUpdate): void {
        this.store.dispatch(userActions.updateUser({ user }));
    }

    public isLoading$(): Observable<boolean> {
        return this.store.pipe(select(UserSelectors.getUserLoading));
    }

    public override selectEntity$(
        id: string
    ): Observable<UserEntity | undefined> {
        return this.store.pipe(select(UserSelectors.selectUserById(id)));
    }

    public selectEntityList$(): Observable<UserEntity[]> {
        return this.store.pipe(select(UserSelectors.getAllUser));
    }

    public selectNewEntityButtonEnabled$(): Observable<boolean> {
		return this.store.pipe(
			select(UserSelectors.isNewEntityButtonEnabled)
		);
	} 
}