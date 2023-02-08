import { TestBed } from '@angular/core/testing';

import { ProofexperienceService } from './proofexperience.service';

describe('ProofexperienceService', () => {
  let service: ProofexperienceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProofexperienceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
