import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressMainPage } from './address-main.page';

describe('AddressMainPage', () => {
  let component: AddressMainPage;
  let fixture: ComponentFixture<AddressMainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressMainPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressMainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
