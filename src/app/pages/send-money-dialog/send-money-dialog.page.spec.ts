import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendMoneyDialogPage } from './send-money-dialog.page';

describe('SendMoneyDialogPage', () => {
  let component: SendMoneyDialogPage;
  let fixture: ComponentFixture<SendMoneyDialogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendMoneyDialogPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendMoneyDialogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
