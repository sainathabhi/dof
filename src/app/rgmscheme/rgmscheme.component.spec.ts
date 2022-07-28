import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RgmschemeComponent } from './rgmscheme.component';

describe('RgmschemeComponent', () => {
  let component: RgmschemeComponent;
  let fixture: ComponentFixture<RgmschemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RgmschemeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RgmschemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
