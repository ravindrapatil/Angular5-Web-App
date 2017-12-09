import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FormsComponent implements OnInit {

  firstname: string;
  lastname: string;
  dataObj: Object;

  constructor() { }

  ngOnInit() {}

  onSubmit() {
    this.dataObj = {
      firstname: this.firstname,
      lastname: this.lastname
    };
    console.log(this.dataObj);
  }

}
