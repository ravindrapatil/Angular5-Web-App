import { TestBed, inject } from '@angular/core/testing';

import { GeofireGooglemapsService } from './geofire-googlemaps.service';

describe('GeofireGooglemapsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeofireGooglemapsService]
    });
  });

  it('should be created', inject([GeofireGooglemapsService], (service: GeofireGooglemapsService) => {
    expect(service).toBeTruthy();
  }));
});
