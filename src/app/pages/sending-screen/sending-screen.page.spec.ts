import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendingScreenPage } from './sending-screen.page';

describe('SendingScreenPage', () => {
  let component: SendingScreenPage;
  let fixture: ComponentFixture<SendingScreenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendingScreenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendingScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
