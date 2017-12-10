import { Component, OnInit, ViewEncapsulation, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-event-emitters-child',
  templateUrl: './event-emitters-child.component.html',
  styleUrls: ['./event-emitters-child.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EventEmittersChildComponent implements OnInit {

  // @Output() clicked = new EventEmitter();
  @Input() valuepassed: any;
  @Output() toParent = new EventEmitter();

  @Output() toParent2 = new EventEmitter();

  constructor() { }

  // public clickChild() {
  //   this.clicked.emit('This is child component code!');
  // }

  public onChange(value) {
    this.toParent.emit(value);
  }

  clickChild2(value) {
    this.toParent2.emit(value);
  }

  ngOnInit() {
  }

}
