import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBankPage } from './add-bank.page';

describe('AddBankPage', () => {
  let component: AddBankPage;
  let fixture: ComponentFixture<AddBankPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBankPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBankPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
