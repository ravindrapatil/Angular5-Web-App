import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GithubUsersService } from '../../services/github-users.service';
import { Observable } from 'rxjs/Observable';
import { Align } from 'ngx-advanced-table';

@Component({
  selector: 'app-basic-ajax-table',
  templateUrl: './basic-ajax-table.component.html',
  styleUrls: ['./basic-ajax-table.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BasicAjaxTableComponent implements OnInit {
  sortInfo: { attr: string; sortDir: string; }[];
  mydata: { age: number; fName: string; lName: string; doj: Date; }[];
  mycolumns: any[];
  public data: any[];
  public datasource: any[];
  // public gethubUserArray: Array<any>;
  public options: any = {
    orderMulti: false,
    className: ['table-striped'],
    language: 'en'
  };

  // public datasource: any = [{
  //   name: 'Ravi',
  //   last: 'Patil',
  //   age: 37
  // }];

  public paging: any = {
    itemsPerPage: 10,
    itemsPerPageOptions: [5, 10, 25, 50, 100],
    maxSize: 5
  };

  public columns: Array<any> = [
    {
      title: 'ID',
      name: 'id',
      sort: true
    }, {
      title: 'Name',
      name: 'name',
      sort: true
    }, {
      title: 'Full Name',
      name: 'full_name',
      sort: true
    }
  ];

  // id: {title: 'ID'},
  // name: {title: 'Name'},
  // full_name: {title: 'Full Name'}

  constructor(public gitHubUserData: GithubUsersService) {
    this.mycolumns = [
      {attr: 'select', display: 'Select', checkbox: true, align: Align.Center},
      {attr: 'fName', display: 'First Name', align: Align.Left, checkbox: true},
      {attr: 'lName', display: 'Last Name', align: Align.Center,
        formatter: (itm: string) => {
          // console.log('my formatter', itm);
          return itm.toUpperCase();
        }
      },
      // {attr: 'full_name', display: 'Full Name', align: Align.Left}
      {attr: 'doj', display: 'Date of Joining', align: Align.Left,
        formatter: (itm: Date) => {
          return ' ' + itm.getFullYear() + '/' + itm.getMonth() + '/' + itm.getDate();
        }
      }
    ];

    this.mydata = [
      {age: 40, fName: 'Ravi', lName: 'Kumar', doj: new Date('2011-10-19')},
      {age: 20, fName: 'Vijay', lName: 'Dharap', doj: new Date('2011-10-20')},
      {age: 20, fName: 'Avinash', lName: 'Dongre', doj: new Date('2011-10-21')},
      {age: 50, fName: 'Sanjay', lName: 'Das', doj: new Date('2011-10-22')}
    ];

    this.sortInfo = [
      {attr: 'fName', sortDir: 'dec'},
      {attr: 'lName', sortDir: 'asc'}
    ];
  }

  // Setting for ng2-smart-table
  settings = {
    actions: false,
    columns: {
      id: {title: 'ID'},
      name: {title: 'Name'},
      full_name: {title: 'Full Name'},
      owner: {
        title: 'Login',
        valuePrepareFunction: (owner) => {
          return owner.login;
        }
      }
    }
  };

  public handleGridSelected(e) {
    console.log(e.data);
  }

  ngOnInit() {
    this.gitHubUserData.getGithubUsers().subscribe(resp => {
      // this.gethubUserArray = resp;
      this.data = resp;
      this.datasource = resp;
      // this.mydata = resp;
    });
  }
}
