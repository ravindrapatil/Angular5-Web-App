import { Injectable } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubUsersService {

  constructor(private http: HttpClient) { }

  public extractGituserData(resp: Response | any) {
    return resp;
  }

  public getGithubUsers() {
    return this.http.get('https://api.github.com/repositories?since=364')
      .map(this.extractGituserData);
  }

}
