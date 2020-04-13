import { TestBed } from '@angular/core/testing';

import { PerseaHttpService } from './persea-http.service';

describe('PerseaHttpService', () => {
  let service: PerseaHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerseaHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
