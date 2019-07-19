import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProffessionalPage } from './proffessional.page';

describe('ProffessionalPage', () => {
  let component: ProffessionalPage;
  let fixture: ComponentFixture<ProffessionalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProffessionalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProffessionalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
