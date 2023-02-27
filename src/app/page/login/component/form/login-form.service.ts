import { Observable, of, ReplaySubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginModel } from 'src/app/api/authentication';
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
		private router: Router
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

		this.router.navigate(['../../list'], {
			relativeTo: this.activatedRoute,
		});
	}

	private register(): void {
		const LoginModel =  this.createLoginModel(
			this.params.formGroup
		);

		// this.authenticationDataService.login(Loginmodel);
	}

	private createFormGroup(): FormGroup {
		return this.formBuilder.group({
			email: [null, [Validators.required]],
			password: [null, [Validators.required]],
		});
	}

	private createLoginModel(formGroup: FormGroup): LoginModel {
		return {
			email: formGroup.value['email'],
			password: formGroup.value['password'],
		}
	}
}
