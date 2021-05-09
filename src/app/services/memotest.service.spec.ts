import { TestBed } from '@angular/core/testing';

import { MemotestService } from './memotest.service';

describe('MemotestService', () => {
  let service: MemotestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemotestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
