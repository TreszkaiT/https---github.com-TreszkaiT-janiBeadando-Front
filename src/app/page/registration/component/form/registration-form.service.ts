import { Observable, of, ReplaySubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationDataService, RegistrationModel } from 'src/app/api/authentication';
export interface RegistrationFormModel {
	formGroup: FormGroup;
}

@Injectable()
export class RegistrationFormService {
	private params!: RegistrationFormModel;
	private params$$: ReplaySubject<RegistrationFormModel>;

	public constructor(
		private activatedRoute: ActivatedRoute,
		private formBuilder: FormBuilder,
		private router: Router,
		private authenticationDataService: AuthenticationDataService
	) {
		this.params$$ = new ReplaySubject();
	}

	public init$(): Observable<RegistrationFormModel> {
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
	}

	private register(): void {
		const registrationModel =  this.createRegistrationModel(
			this.params.formGroup
		);

		this.authenticationDataService.register$(registrationModel).subscribe({next: (data) => {
			if (data) {
				this.router.navigate(['../login'], { relativeTo: this.activatedRoute })
			}
		}});
	}

	private createFormGroup(): FormGroup {
		return this.formBuilder.group({
			email: [null, [Validators.required]],
			password: [null, [Validators.required]],
		});
	}

	private createRegistrationModel(formGroup: FormGroup): RegistrationModel {
		return {
			id: 0,
			name: "fdf",
			email: formGroup.value['email'],
			password: formGroup.value['password'],
			found: false,
		}
	}
}
