import { Injectable } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CarsService {

  constructor(private http: Http) { }

  public extractCars(resp: Response | any) {
    return resp;
  }

  public getAllCars() {
    return this.http.get('../assets/json/cars.json')
      .map(this.extractCars);
  }

}
