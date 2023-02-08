import { TestBed } from '@angular/core/testing';

import { MessageappService } from './messageapp.service';

describe('MessageappService', () => {
  let service: MessageappService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageappService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
