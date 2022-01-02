import { TestBed } from '@angular/core/testing';

import { CommonHttpErrorInterceptor } from './common-http-error.interceptor';

describe('CommonHttpErrorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CommonHttpErrorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CommonHttpErrorInterceptor = TestBed.inject(CommonHttpErrorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
