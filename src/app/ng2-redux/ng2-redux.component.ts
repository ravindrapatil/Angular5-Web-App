import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../store';
import { REMOVE_ALL_TODOS } from '../actions';

@Component({
  selector: 'app-ng2-redux',
  templateUrl: './ng2-redux.component.html',
  styleUrls: ['./ng2-redux.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Ng2ReduxComponent implements OnInit {
  @select() todos;
  @select() lastUpdate;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }

  clearTodos() {
    this.ngRedux.dispatch({type: REMOVE_ALL_TODOS});
  }

}
