import { TestBed } from '@angular/core/testing';

import { DataZooService } from './data-zoo.service';

describe('DataZooService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataZooService = TestBed.get(DataZooService);
    expect(service).toBeTruthy();
  });
});
