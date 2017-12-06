import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaugeSpeedometerComponent } from './gauge-speedometer.component';

describe('GaugeSpeedometerComponent', () => {
  let component: GaugeSpeedometerComponent;
  let fixture: ComponentFixture<GaugeSpeedometerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaugeSpeedometerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaugeSpeedometerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
