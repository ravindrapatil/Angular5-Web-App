import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectedCompComponent } from './injected-comp.component';

describe('InjectedCompComponent', () => {
  let component: InjectedCompComponent;
  let fixture: ComponentFixture<InjectedCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InjectedCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InjectedCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
