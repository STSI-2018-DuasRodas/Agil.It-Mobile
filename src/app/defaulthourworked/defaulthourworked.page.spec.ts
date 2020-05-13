import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultHourWorkedPage } from './defaulthourworked.page';

describe('DefaultHourWorkedPage', () => {
  let component: DefaultHourWorkedPage;
  let fixture: ComponentFixture<DefaultHourWorkedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultHourWorkedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultHourWorkedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
