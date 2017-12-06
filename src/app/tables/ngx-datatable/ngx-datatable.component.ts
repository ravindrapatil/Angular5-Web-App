import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GithubUsersService } from '../../services/github-users.service';

@Component({
  selector: 'app-ngx-datatable',
  templateUrl: './ngx-datatable.component.html',
  styleUrls: ['./ngx-datatable.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NgxDatatableComponent implements OnInit {
  // public rows: any;
  public rows: Array <any> = new Array <any> ();
  loadingIndicator = true;
  reorderable = true;
  selected: any[] = [];

  constructor(public gitHubUserData: GithubUsersService) {
    this.gitHubUserData.getGithubUsers().subscribe(resp => {
      this.rows = resp;
      setTimeout(() => { this.loadingIndicator = false; }, 1500);
    });
  }

  // rows = [
  //   { name: 'Austin', gender: 'Male', company: 'Swimlane' },
  //   { name: 'Dany', gender: 'Male', company: 'KFC' },
  //   { name: 'Molly', gender: 'Female', company: 'Burger King' },
  // ];

  // columns = [
  //   { prop: 'id', name: 'ID' },
  //   { prop: 'name', name: 'Name' },
  //   { prop: 'full_name', name: 'Full Name' },
  //   { prop: 'owner.login', name: 'Login' }
  //   // { prop: 'owner.avatar_url', name: 'Avatar' }
  // ];

  onSelect(e) {
    console.log('Event: select', event, this.selected);
  }

  ngOnInit() {}

}
