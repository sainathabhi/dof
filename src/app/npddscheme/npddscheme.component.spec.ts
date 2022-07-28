import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpddschemeComponent } from './npddscheme.component';

describe('NpddschemeComponent', () => {
  let component: NpddschemeComponent;
  let fixture: ComponentFixture<NpddschemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NpddschemeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NpddschemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
