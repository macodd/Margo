import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendMoneyPage } from './send-money.page';

describe('SendMoneyPage', () => {
  let component: SendMoneyPage;
  let fixture: ComponentFixture<SendMoneyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendMoneyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendMoneyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
