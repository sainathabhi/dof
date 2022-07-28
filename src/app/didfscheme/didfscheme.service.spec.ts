import { TestBed } from '@angular/core/testing';

import { DidfschemeService } from './didfscheme.service';

describe('DidfschemeService', () => {
  let service: DidfschemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DidfschemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
