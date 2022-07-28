import { TestBed } from '@angular/core/testing';

import { RgmschemeService } from './rgmscheme.service';

describe('RgmschemeService', () => {
  let service: RgmschemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RgmschemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
