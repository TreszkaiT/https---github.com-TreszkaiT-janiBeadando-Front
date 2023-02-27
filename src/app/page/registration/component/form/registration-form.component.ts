import { Observable } from 'rxjs';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';


import { RegistrationFormModel, RegistrationFormService } from './registration-form.service';

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [RegistrationFormService],
	selector: 'app-registration-form',
	templateUrl: './registration-form.component.html',
	styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent implements OnInit {
	public params$!: Observable<RegistrationFormModel>;

	public constructor(private componentService: RegistrationFormService) {
	}

	public cancel(): void {
		this.componentService.cancel();
	}

	public ngOnInit(): void {
		this.params$ = this.componentService.init$();
	}

	public submit(): void {
		this.componentService.submit();
	}
}
