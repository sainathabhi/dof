import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatewiseLhdcschemeComponent } from './statewise-lhdcscheme.component';

describe('StatewiseLhdcschemeComponent', () => {
  let component: StatewiseLhdcschemeComponent;
  let fixture: ComponentFixture<StatewiseLhdcschemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatewiseLhdcschemeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatewiseLhdcschemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
