import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthPinPage } from './auth-pin.page';

describe('AuthPinPage', () => {
  let component: AuthPinPage;
  let fixture: ComponentFixture<AuthPinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthPinPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthPinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
