import { TestBed } from '@angular/core/testing';

import { SdcfposchemeService } from './sdcfposcheme.service';

describe('SdcfposchemeService', () => {
  let service: SdcfposchemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SdcfposchemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
