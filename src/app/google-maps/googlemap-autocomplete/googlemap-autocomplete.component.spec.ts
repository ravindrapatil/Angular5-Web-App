import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GooglemapAutocompleteComponent } from './googlemap-autocomplete.component';

describe('GooglemapAutocompleteComponent', () => {
  let component: GooglemapAutocompleteComponent;
  let fixture: ComponentFixture<GooglemapAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GooglemapAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GooglemapAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
