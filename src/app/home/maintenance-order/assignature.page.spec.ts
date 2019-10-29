import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignaturePage } from './assignature.page';

describe('AssignaturePage', () => {
  let component: AssignaturePage;
  let fixture: ComponentFixture<AssignaturePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignaturePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignaturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
