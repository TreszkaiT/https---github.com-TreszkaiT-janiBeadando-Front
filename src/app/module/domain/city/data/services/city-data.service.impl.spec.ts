import { TestBed } from '@angular/core/testing';

import { CityDataServiceImpl } from './city-data.service.impl';

describe('CityDataServiceImpl', () => {
  let service: CityDataServiceImpl;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CityDataServiceImpl);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});