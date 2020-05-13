import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteHourworkedPage } from './routehourworked.page';

describe('RouteHourworkedPage', () => {
  let component: RouteHourworkedPage;
  let fixture: ComponentFixture<RouteHourworkedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteHourworkedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteHourworkedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
