import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultOperationPage } from './defaultoperation.page';

describe('DefaultOperationPage', () => {
  let component: DefaultOperationPage;
  let fixture: ComponentFixture<DefaultOperationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultOperationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultOperationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
