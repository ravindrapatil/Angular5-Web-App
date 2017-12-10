import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-event-emitters',
  templateUrl: './event-emitters.component.html',
  styleUrls: ['./event-emitters.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EventEmittersComponent implements OnInit {
  childDataa: any;

  valueToBePassed: string;
  childValue: string;

  public employeeRecord = [
    {eName: 'John Wright', eCity: 'Landon', eDept: 'Web Developer'},
    {eName: 'Steve Wagh', eCity: 'India', eDept: 'Java Developer'},
    {eName: 'George Bush', eCity: 'USA', eDept: '.Net Developer'},
    {eName: 'Donald Trump', eCity: 'France', eDept: 'PHP Developer'}
  ];

  constructor() {}

  // onClicked(value) {
  //   this.childData = value;
  // }

  toParented(value) {
    this.childDataa = value;
  }

  getRecord(emp) {
    console.log('This is a ' + JSON.stringify(emp));
  }

  ngOnInit() {
  }

}
