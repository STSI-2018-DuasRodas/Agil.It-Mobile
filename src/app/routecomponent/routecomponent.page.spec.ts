import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteComponentPage } from './routecomponent.page';

describe('RouteComponentPage', () => {
  let component: RouteComponentPage;
  let fixture: ComponentFixture<RouteComponentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteComponentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteComponentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
