import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakePaymentDialogPage } from './make-payment-dialog.page';

describe('MakePaymentDialogPage', () => {
  let component: MakePaymentDialogPage;
  let fixture: ComponentFixture<MakePaymentDialogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakePaymentDialogPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakePaymentDialogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
