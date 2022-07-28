import { TestBed } from '@angular/core/testing';

import { NlmschemeService } from './nlmscheme.service';

describe('NlmschemeService', () => {
  let service: NlmschemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NlmschemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
