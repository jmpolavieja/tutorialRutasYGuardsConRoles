import { TestBed } from '@angular/core/testing';

import { GuardSignInGuard } from './guard-sign-in.guard';

describe('GuardSignInGuard', () => {
  let guard: GuardSignInGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardSignInGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
