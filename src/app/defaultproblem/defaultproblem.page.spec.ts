import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultProblemPage } from './defaultproblem.page';

describe('DefaultProblemPage', () => {
  let component: DefaultProblemPage;
  let fixture: ComponentFixture<DefaultProblemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultProblemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultProblemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
