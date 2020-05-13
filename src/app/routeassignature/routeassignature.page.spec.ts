import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteAssignaturePage } from './routeassignature.page';

describe('RouteAssignaturePage', () => {
  let component: RouteAssignaturePage;
  let fixture: ComponentFixture<RouteAssignaturePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteAssignaturePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteAssignaturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
