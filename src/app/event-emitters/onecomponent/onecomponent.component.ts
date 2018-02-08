import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SubjectService } from '../../services/subject.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { TvmazeService } from '../../services/tvmaze.service';
import { debug } from 'util';

@Component({
  selector: 'app-onecomponent',
  templateUrl: './onecomponent.component.html',
  styleUrls: ['./onecomponent.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OnecomponentComponent implements OnInit {
  subjName: any;
  subjects: string;
  query: any;
  private URL = 'https://api.tvmaze.com/search/shows?q=';

  constructor(private subService: SubjectService, private http: HttpClient, private tvService: TvmazeService) { }

  ngOnInit() {
    this.subService.cast.subscribe(sub => this.subjects = sub);
  }

  editSubject() {
    this.subService.editUser(this.subjName);
  }

  // searchResult(query: any) {
  //   debugger;
  //   const params = new HttpParams();
  //   params.set('q', query);
  //   this.http.get(this.URL, {params}).subscribe(res => {
  //     debugger;
  //     console.log(res);
  //   });
  // }

}
