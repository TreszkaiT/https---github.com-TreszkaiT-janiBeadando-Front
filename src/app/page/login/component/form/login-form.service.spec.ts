import { TestBed } from '@angular/core/testing';

import { LoginFormService } from './login-form.service';

describe('LoginFormService', () => {
	let service: LoginFormService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [LoginFormService],
		});

		service = TestBed.inject(LoginFormService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
