import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { URLSearchParams } from '@angular/http';

@Injectable()
export class TvmazeService {
  private URL = 'https://api.tvmaze.com/search/shows';

  constructor(private http: HttpClient) { }

  // search(query: any) {
  //   const params = new HttpParams();
  //   params.set('q', query);
  //   return this.http.get(this.URL, {params}).do(res => {
  //     console.log(res);
  //   });
  // }

}
