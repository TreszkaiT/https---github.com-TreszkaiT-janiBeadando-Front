import { TestBed } from '@angular/core/testing';

import { CityDataServiceMock } from './city-data.service.mock';

describe('CityDataServiceMock', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: CityDataServiceMock =
            TestBed.inject(CityDataServiceMock);

        expect(service).toBeTruthy();
    });
});
