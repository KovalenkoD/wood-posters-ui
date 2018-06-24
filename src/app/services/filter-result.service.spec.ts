import { TestBed, inject } from '@angular/core/testing';

import { FilterResultService } from './filter-result.service';

describe('FilterResultService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilterResultService]
    });
  });

  it('should be created', inject([FilterResultService], (service: FilterResultService) => {
    expect(service).toBeTruthy();
  }));
});
