import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { NgRedux, select } from '@angular-redux/store';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavigationComponent implements OnInit {
  @select() lastUpdate;
  public isNavbarCollapsed = true;
  public closeResult: string;

  constructor(private modelService: NgbModal, private route: Router) {}

  open(content) {
    this.modelService.open(content, {windowClass: 'dark-modal'});
  }

  ngOnInit() {
  }

  logout() {
    sessionStorage.clear();
    this.route.navigateByUrl('/login');
    // this.modelService.close('Close click');
  }

}
