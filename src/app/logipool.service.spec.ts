import { TestBed } from '@angular/core/testing';

import { LogipoolService } from './logipool.service';

describe('LogipoolService', () => {
  let service: LogipoolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogipoolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
