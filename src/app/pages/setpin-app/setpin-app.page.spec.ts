import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetpinAppPage } from './setpin-app.page';

describe('SetpinAppPage', () => {
  let component: SetpinAppPage;
  let fixture: ComponentFixture<SetpinAppPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetpinAppPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetpinAppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
