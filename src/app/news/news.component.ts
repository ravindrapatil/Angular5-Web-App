import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NewsApiService } from '../services/news-api.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewsComponent implements OnInit {

  public mainData: any;
  public allNews: any;
  public searchText: any;
  public searchTerm: any;

  // tslint:disable-next-line:no-inferrable-types
  public loading: boolean = true;

  constructor(private newsService: NewsApiService) {
    // this.loading = true;
  }

  ngOnInit() {
    this.newsService.getLatestNews().subscribe(res => {
      this.mainData = res;
      this.loading = false;
    },
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log('An error occurred:', err.error.message);
      } else {
        console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
      }
    });

    // this.newsService.getEveryThingNews().subscribe(resp => {
    //   console.log(resp);
    // });

    // allNews now stores the Observable itself and not an array. We don’t need to subscribe but
    // simply store the result of calling newsService.getEveryThingNews.
    // To make the above work we need to use the async pipe in our template, like so:
    // <div  *ngFor="let item of results | async"> ... </div>

    this.allNews = this.newsService.getEveryThingNews();
  }

}
