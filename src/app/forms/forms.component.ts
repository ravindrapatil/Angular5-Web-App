import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FormsComponent implements OnInit {
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  firstname: string;
  lastname: string;
  // email: any;
  dataObj: Object;

  constructor() { }

  ngOnInit() {}

  onSubmit() {
    this.dataObj = {
      firstname: this.firstname,
      lastname: this.lastname
      // email: this.email
    };
    console.log(this.dataObj);
  }

}
