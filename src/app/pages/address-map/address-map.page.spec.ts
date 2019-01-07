import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressMapPage } from './address-map.page';

describe('AddressMapPage', () => {
  let component: AddressMapPage;
  let fixture: ComponentFixture<AddressMapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressMapPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
