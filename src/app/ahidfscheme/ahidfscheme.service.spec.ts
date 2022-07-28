import { TestBed } from '@angular/core/testing';

import { AhidfschemeService } from './ahidfscheme.service';

describe('AhidfschemeService', () => {
  let service: AhidfschemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AhidfschemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
