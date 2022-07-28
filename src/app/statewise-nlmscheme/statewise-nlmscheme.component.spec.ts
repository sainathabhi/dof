import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatewiseNlmschemeComponent } from './statewise-nlmscheme.component';

describe('StatewiseNlmschemeComponent', () => {
  let component: StatewiseNlmschemeComponent;
  let fixture: ComponentFixture<StatewiseNlmschemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatewiseNlmschemeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatewiseNlmschemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
