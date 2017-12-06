import { Injectable } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class NewsApiService {

  constructor(private http: HttpClient) {}

  private extractDetails(res: Response | any) {
    // tslint:disable-next-line:no-debugger
    return res.articles;
  }

  private extractEveryThing(resp: Response | any) {
    return resp.articles;
  }

  public getLatestNews() {
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=adb1d131a81445589dbe694125a47c0c')
      .map(this.extractDetails);
  }

  public getEveryThingNews() {
    return this.http.get('https://newsapi.org/v2/everything?q=bitcoin&apiKey=adb1d131a81445589dbe694125a47c0c')
      .map(this.extractEveryThing);
  }
}
