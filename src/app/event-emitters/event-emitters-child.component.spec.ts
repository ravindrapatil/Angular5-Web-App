import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventEmittersChildComponent } from './event-emitters-child.component';

describe('EventEmittersChildComponent', () => {
  let component: EventEmittersChildComponent;
  let fixture: ComponentFixture<EventEmittersChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventEmittersChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventEmittersChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
