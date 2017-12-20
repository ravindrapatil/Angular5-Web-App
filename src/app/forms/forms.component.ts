import { Component, OnInit, ViewEncapsulation, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FormsComponent implements OnInit, AfterViewInit {
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  firstname: string;
  lastname: string;
  // email: any;
  dataObj: Object;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {}

  onSubmit() {
    this.dataObj = {
      firstname: this.firstname,
      lastname: this.lastname
      // email: this.email
    };
    console.log(this.dataObj);
  }

}
