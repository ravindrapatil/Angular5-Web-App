import { Component, ElementRef, NgZone, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import {} from '@types/googlemaps';

declare var google: any;

@Component({
  selector: 'app-googlemap-autocomplete',
  templateUrl: './googlemap-autocomplete.component.html',
  styleUrls: ['./googlemap-autocomplete.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GooglemapAutocompleteComponent implements OnInit {
  public latitude: number;
  public longitude: number;
  public zoom: number;
  public searchControl: FormControl;
  @ViewChild('address') public searchElementRef: ElementRef;

  constructor(public mapsAPILoader: MapsAPILoader, public ngZone: NgZone) { }

  ngOnInit() {
    this.zoom = 4;
    this.latitude = 39.8282;
    this.longitude = -98.5795;

    // create search FormControl
    this.searchControl = new FormControl();
    // set current position
    this.setCurrentPosition();

    // load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
     // tslint:disable-next-line:prefer-const
     let autocomplete = new google.maps.places.Autocomplete(
      <HTMLInputElement>document.getElementById('address'), {});
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          // get the place result
          // tslint:disable-next-line:prefer-const
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          // add map calls here
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          // set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
  }

  public setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }

}
