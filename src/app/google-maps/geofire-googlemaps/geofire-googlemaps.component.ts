import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-geofire-googlemaps',
  templateUrl: './geofire-googlemaps.component.html',
  styleUrls: ['./geofire-googlemaps.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GeofireGooglemapsComponent implements OnInit {

  lat: number;
  lng: number;

  constructor() { }

  ngOnInit() {
    this.getUserLocation();
  }

  public getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    }
  }

}
