import { TestBed } from '@angular/core/testing';

import { FormAdminService } from './form-admin.service';

describe('FormAdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormAdminService = TestBed.get(FormAdminService);
    expect(service).toBeTruthy();
  });
});
