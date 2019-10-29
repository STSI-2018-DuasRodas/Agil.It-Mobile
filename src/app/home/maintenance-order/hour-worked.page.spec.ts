import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HourWorkedPage } from './hour-worked.page';

describe('HourWorkedPage', () => {
  let component: HourWorkedPage;
  let fixture: ComponentFixture<HourWorkedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HourWorkedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HourWorkedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
