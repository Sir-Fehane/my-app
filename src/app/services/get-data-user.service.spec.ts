import { TestBed } from '@angular/core/testing';

import { GetDataUserService } from './get-data-user.service';

describe('GetDataUserService', () => {
  let service: GetDataUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDataUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
