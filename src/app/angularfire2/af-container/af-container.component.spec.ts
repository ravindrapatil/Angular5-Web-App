import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfContainerComponent } from './af-container.component';

describe('AfContainerComponent', () => {
  let component: AfContainerComponent;
  let fixture: ComponentFixture<AfContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
