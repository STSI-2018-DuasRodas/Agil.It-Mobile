import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HourworkedComponent } from './hourworked.component';

describe('HourworkedComponent', () => {
  let component: HourworkedComponent;
  let fixture: ComponentFixture<HourworkedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HourworkedComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HourworkedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
