import { TestBed } from '@angular/core/testing';

import { UserLogService } from './user-log.service';

describe('UserLogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserLogService = TestBed.get(UserLogService);
    expect(service).toBeTruthy();
  });
});
