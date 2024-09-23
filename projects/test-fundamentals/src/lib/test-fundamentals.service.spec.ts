import { TestBed } from '@angular/core/testing';

import { TestFundamentalsService } from './test-fundamentals.service';

describe('TestFundamentalsService', () => {
  let service: TestFundamentalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestFundamentalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
