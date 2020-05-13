import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultAssignaturePage } from './defaultassignature.page';

describe('DefaultAssignaturePage', () => {
  let component: DefaultAssignaturePage;
  let fixture: ComponentFixture<DefaultAssignaturePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultAssignaturePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultAssignaturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
