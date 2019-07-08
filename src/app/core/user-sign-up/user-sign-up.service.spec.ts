import { TestBed } from '@angular/core/testing';

import { UserSignUpService } from './user-sign-up.service';

describe('UserSignUpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserSignUpService = TestBed.get(UserSignUpService);
    expect(service).toBeTruthy();
  });
});
