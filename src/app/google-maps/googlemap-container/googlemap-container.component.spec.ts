import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GooglemapContainerComponent } from './googlemap-container.component';

describe('GooglemapContainerComponent', () => {
  let component: GooglemapContainerComponent;
  let fixture: ComponentFixture<GooglemapContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GooglemapContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GooglemapContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
