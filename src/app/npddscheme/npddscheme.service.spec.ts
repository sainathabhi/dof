import { TestBed } from '@angular/core/testing';

import { NpddschemeService } from './npddscheme.service';

describe('NpddschemeService', () => {
  let service: NpddschemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NpddschemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
