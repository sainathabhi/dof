import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DidfschemeComponent } from './didfscheme.component';

describe('DidfschemeComponent', () => {
  let component: DidfschemeComponent;
  let fixture: ComponentFixture<DidfschemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DidfschemeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DidfschemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
