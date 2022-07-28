import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdcfposchemeComponent } from './sdcfposcheme.component';

describe('SdcfposchemeComponent', () => {
  let component: SdcfposchemeComponent;
  let fixture: ComponentFixture<SdcfposchemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SdcfposchemeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SdcfposchemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
