import { TestBed } from '@angular/core/testing';

import { ProofExperienceService } from './proofexperience.service';

describe('ProofexperienceService', () => {
  let service: ProofExperienceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProofExperienceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
