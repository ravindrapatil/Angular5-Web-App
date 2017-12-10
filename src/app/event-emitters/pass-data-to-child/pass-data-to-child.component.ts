import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pass-data-to-child',
  templateUrl: './pass-data-to-child.component.html',
  styleUrls: ['./pass-data-to-child.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PassDataToChildComponent implements OnInit {
  @Input() employeeInfo: any;
  @Output() sendRecord: EventEmitter<any> = new EventEmitter();

  constructor() {}

  emitSendRecord(emp) {
    this.sendRecord.emit(emp);
  }

  ngOnInit() {
  }

}
