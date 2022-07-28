import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatedashboardComponent } from './statedashboard.component';

describe('StatedashboardComponent', () => {
  let component: StatedashboardComponent;
  let fixture: ComponentFixture<StatedashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatedashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatedashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
