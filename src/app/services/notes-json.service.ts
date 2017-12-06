import { Injectable } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class NotesJsonService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response | any) {
    return res;
  }

  public getNotes() {
    return this.http.get('./assets/json/notes.json')
      .map(this.extractData);
  }

}
