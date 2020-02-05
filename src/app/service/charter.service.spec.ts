import { TestBed } from '@angular/core/testing';

import { CharterService } from './charter.service';

describe('CharterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CharterService = TestBed.get(CharterService);
    expect(service).toBeTruthy();
  });
});
