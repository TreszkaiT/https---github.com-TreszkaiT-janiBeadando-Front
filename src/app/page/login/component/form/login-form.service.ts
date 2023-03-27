import { Observable, of, ReplaySubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationDataService, LoginModel } from 'src/app/api/authentication';
export interface LoginFormModel {
	formGroup: FormGroup;
}

@Injectable()
export class LoginFormService {
	private params!: LoginFormModel;
	private params$$: ReplaySubject<LoginFormModel>;

	public constructor(
		private activatedRoute: ActivatedRoute,
		private formBuilder: FormBuilder,
		private router: Router,
		private authenticationDataService: AuthenticationDataService
	) {
		this.params$$ = new ReplaySubject();
	}

	public init$(): Observable<LoginFormModel> {
		return of(true).pipe(switchMap(() => {
			const formGroup: FormGroup = this.createFormGroup();

			this.params = {
				formGroup
			};

			this.params$$.next(this.params);

			return this.params$$;
		}))
	}

	public submit(): void {
		this.register();

		// this.router.navigate(['../../list'], {				// mock miatt volt itt
		// 	relativeTo: this.activatedRoute,
		// })
	}

	private register(): void {
		const loginModel =  this.createLoginModel(
			this.params.formGroup
		);

		this.authenticationDataService.login$(loginModel).subscribe({			// a DataService-n meghívjuk a login-t egy loginModellel, és feliratkozunk az Observable-ra
			next: (user) => {
				if (user) {
					this.router.navigateByUrl('/');								// ha van User obj, akkor átnavigálunk a / -re, homepage-ra 
				}
			}
		});
	}

	private createFormGroup(): FormGroup {
		return this.formBuilder.group({
			email: [null, [Validators.required, Validators.email]],
			password: [null, [Validators.required]],
		});
	}

	private createLoginModel(formGroup: FormGroup): LoginModel {
		return {
			id: 0,
			name: "fdf",
			email: formGroup.value['email'],
			password: formGroup.value['password'],
			found: false,
		}
	}
}
