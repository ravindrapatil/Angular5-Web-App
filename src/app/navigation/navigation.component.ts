import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavigationComponent implements OnInit {

  public isNavbarCollapsed = true;
  public closeResult: string;

  constructor(private modelService: NgbModal) { }

  open(content) {
    this.modelService.open(content, {windowClass: 'dark-modal'});
  }

  ngOnInit() {
  }

}
