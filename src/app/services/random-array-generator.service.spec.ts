import { TestBed } from '@angular/core/testing';

import { RandomArrayGeneratorService } from './random-array-generator.service';

describe('RandomArrayGeneratorService', () => {
  let service: RandomArrayGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomArrayGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
