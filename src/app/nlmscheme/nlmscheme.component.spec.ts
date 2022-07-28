import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NlmschemeComponent } from './nlmscheme.component';

describe('NlmschemeComponent', () => {
  let component: NlmschemeComponent;
  let fixture: ComponentFixture<NlmschemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NlmschemeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NlmschemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
