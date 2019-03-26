import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsDialogPage } from './terms-dialog.page';

describe('TermsDialogPage', () => {
  let component: TermsDialogPage;
  let fixture: ComponentFixture<TermsDialogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermsDialogPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsDialogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
