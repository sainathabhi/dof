import { TestBed } from '@angular/core/testing';

import { StatewiseLhdcschemeService } from './statewise-lhdcscheme.service';

describe('StatewiseLhdcschemeService', () => {
  let service: StatewiseLhdcschemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatewiseLhdcschemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
