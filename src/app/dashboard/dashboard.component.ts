import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { NewsApiService } from '../services/news-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  public newslength: any;

  constructor(private newsService: NewsApiService) {
    this.newsService.getLatestNews().subscribe(res => {
      this.newslength = res.length;
    });
  }

  ngOnInit() {
  }

}
