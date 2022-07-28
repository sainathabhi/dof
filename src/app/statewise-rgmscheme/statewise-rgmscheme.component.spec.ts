import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatewiseRgmschemeComponent } from './statewise-rgmscheme.component';

describe('StatewiseRgmschemeComponent', () => {
  let component: StatewiseRgmschemeComponent;
  let fixture: ComponentFixture<StatewiseRgmschemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatewiseRgmschemeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatewiseRgmschemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
