/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MagazinePageComponent } from './magazine-page.component';

describe('MagazinePageComponent', () => {
  let component: MagazinePageComponent;
  let fixture: ComponentFixture<MagazinePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagazinePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagazinePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
