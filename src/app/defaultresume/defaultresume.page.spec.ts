import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultResumePage } from './defaultresume.page';

describe('DefaulResumePage', () => {
  let component: DefaultResumePage;
  let fixture: ComponentFixture<DefaultResumePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultResumePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultResumePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
