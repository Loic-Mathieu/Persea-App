import { TestBed } from '@angular/core/testing';

import { PerseaXmlService } from './persea-xml.service';

describe('PerseaXmlService', () => {
  let service: PerseaXmlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerseaXmlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
