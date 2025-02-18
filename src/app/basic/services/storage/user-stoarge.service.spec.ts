import { TestBed } from '@angular/core/testing';

import { UserStoargeService } from './user-stoarge.service';

describe('UserStoargeService', () => {
  let service: UserStoargeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserStoargeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
