import { TestBed } from '@angular/core/testing';

import { ResquestInterceptor } from './resquest.interceptor';

describe('ResquestInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ResquestInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ResquestInterceptor = TestBed.inject(ResquestInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
