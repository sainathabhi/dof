import { TestBed } from '@angular/core/testing';

import { StatedashboardService } from './statedashboard.service';

describe('StatedashboardService', () => {
  let service: StatedashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatedashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
