import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBalancePage } from './add-balance.page';

describe('AddBalancePage', () => {
  let component: AddBalancePage;
  let fixture: ComponentFixture<AddBalancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBalancePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBalancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
