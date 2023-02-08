import { TestBed } from '@angular/core/testing';

import { OtherskillService } from './otherskill.service';

describe('OtherskillService', () => {
  let service: OtherskillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OtherskillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
