import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwocomponentComponent } from './twocomponent.component';

describe('TwocomponentComponent', () => {
  let component: TwocomponentComponent;
  let fixture: ComponentFixture<TwocomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwocomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwocomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
