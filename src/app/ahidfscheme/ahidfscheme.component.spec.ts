import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhidfschemeComponent } from './ahidfscheme.component';

describe('AhidfschemeComponent', () => {
  let component: AhidfschemeComponent;
  let fixture: ComponentFixture<AhidfschemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AhidfschemeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AhidfschemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
