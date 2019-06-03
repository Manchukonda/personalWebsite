import { TestBed } from '@angular/core/testing';

import { ExtraCircularService } from './extra-circular.service';

describe('ExtraCircularService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExtraCircularService = TestBed.get(ExtraCircularService);
    expect(service).toBeTruthy();
  });
});
