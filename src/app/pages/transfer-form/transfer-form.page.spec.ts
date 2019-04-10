import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferFormPage } from './transfer-form.page';

describe('TransferFormPage', () => {
  let component: TransferFormPage;
  let fixture: ComponentFixture<TransferFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferFormPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
