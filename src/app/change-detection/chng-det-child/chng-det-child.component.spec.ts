import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChngDetChildComponent } from './chng-det-child.component';

describe('ChngDetChildComponent', () => {
  let component: ChngDetChildComponent;
  let fixture: ComponentFixture<ChngDetChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChngDetChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChngDetChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
