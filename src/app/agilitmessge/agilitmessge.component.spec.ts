import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgilitmessgeComponent } from './agilitmessge.component';

describe('AgilitmessgeComponent', () => {
  let component: AgilitmessgeComponent;
  let fixture: ComponentFixture<AgilitmessgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgilitmessgeComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgilitmessgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
