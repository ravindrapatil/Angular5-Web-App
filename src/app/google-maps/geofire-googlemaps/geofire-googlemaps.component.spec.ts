import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeofireGooglemapsComponent } from './geofire-googlemaps.component';

describe('GeofireGooglemapsComponent', () => {
  let component: GeofireGooglemapsComponent;
  let fixture: ComponentFixture<GeofireGooglemapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeofireGooglemapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeofireGooglemapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
