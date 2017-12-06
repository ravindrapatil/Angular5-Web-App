import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicAjaxTableComponent } from './basic-ajax-table.component';

describe('BasicAjaxTableComponent', () => {
  let component: BasicAjaxTableComponent;
  let fixture: ComponentFixture<BasicAjaxTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicAjaxTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicAjaxTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
