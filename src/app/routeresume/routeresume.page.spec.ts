import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteResumePage } from './routeresume.page';

describe('RouteResumePage', () => {
  let component: RouteResumePage;
  let fixture: ComponentFixture<RouteResumePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteResumePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteResumePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
