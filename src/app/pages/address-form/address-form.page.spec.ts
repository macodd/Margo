import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressFormPage } from './address-form.page';

describe('AddressFormPage', () => {
  let component: AddressFormPage;
  let fixture: ComponentFixture<AddressFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressFormPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
