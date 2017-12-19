import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2ReduxComponent } from './ng2-redux.component';

describe('Ng2ReduxComponent', () => {
  let component: Ng2ReduxComponent;
  let fixture: ComponentFixture<Ng2ReduxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng2ReduxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2ReduxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
