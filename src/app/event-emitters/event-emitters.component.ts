import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-event-emitters',
  templateUrl: './event-emitters.component.html',
  styleUrls: ['./event-emitters.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EventEmittersComponent implements OnInit {
  singleEmp: any;
  childDataa: any;
  closeResult: string;
  valueToBePassed: string;
  childValue: string;
  isBordered: boolean;
  myPassedString = 'This is my String';

  public employeeRecord = [
    {eName: 'John Wright', eCity: 'Landon', eDept: 'Web Developer'},
    {eName: 'Steve Wagh', eCity: 'India', eDept: 'Java Developer'},
    {eName: 'George Bush', eCity: 'USA', eDept: '.Net Developer'},
    {eName: 'Donald Trump', eCity: 'France', eDept: 'PHP Developer'},
    {eName: 'Obama', eCity: 'USA', eDept: 'Android Developer'},
  ];

  constructor(private modalService: NgbModal, public routername: Router) {}

  // onClicked(value) {
  //   this.childData = value;
  // }

  toParented(value) {
    this.childDataa = value;
  }

  getRecord(emp, content) {
    this.singleEmp = emp;
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  ngOnInit() {
    const data = this.routername.routerState;
  }

}
