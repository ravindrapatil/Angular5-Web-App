import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-googlemap-container',
  templateUrl: './googlemap-container.component.html',
  styleUrls: ['./googlemap-container.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GooglemapContainerComponent implements OnInit {
  isDraggable: any;
  zoom = 10;
  lat = 42.858217;
  lng = -70.929990;
  markerName: string;
  markerLat: number;
  markerLng: number;
  markerDraggable: string;
  markers: marker[];

  constructor() {
    this.markers = [
      {
        name: 'Company Name One',
        lat: 42.825588,
        lng: -71.018029,
        draggable: false
      }, {
        name: 'Company Name Two',
        lat: 42.39506551565123,
        lng: -71.12548828125,
        draggable: false
      }, {
        name: 'Company Name Three',
        lat: 42.309815415686664,
        lng: -72.6361083984375,
        draggable: false
      }
    ];
  }

  public mapClicked($event: any) {
    console.log($event);
    const newMarker = {
      name: 'This is default marker name',
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    };
    this.markers.push(newMarker);
  }

  // tslint:disable-next-line:no-shadowed-variable
  public clickedMarker(marker: marker, index: number) {
    console.log('Clicked Marker ' + marker.name + ' at index ' + index);
  }

  // tslint:disable-next-line:no-shadowed-variable
  public markerDragEnd(marker: marker, $event: any) {
    const updatedMarker = {
      name: marker.name,
      lat: marker.lat,
      lng: marker.lng,
      draggable: false
    };
    const newLat = $event.coords.lat;
    const newlng = $event.coords.lng;
  }

  public addMarker() {
    if (this.markerDraggable === 'yes') {
      this.isDraggable = true;
    } else {
      this.isDraggable = false;
    }
    const newMarkers = {
      name: this.markerName,
      lat: + this.markerLat,
      lng: + this.markerLng,
      draggable: this.isDraggable
    };
    console.log(newMarkers);
    this.markers.push(newMarkers);
  }

  ngOnInit() {}
}

// Marker Type
// tslint:disable-next-line:class-name
interface marker {
  name?: string;
  lat: number;
  lng: number;
  draggable: boolean;
}
