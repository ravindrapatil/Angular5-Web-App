import { Component, OnInit, ViewEncapsulation, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ChangeDetectionComponent } from '../change-detection.component';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-chng-det-child',
  templateUrl: './chng-det-child.component.html',
  styleUrls: ['./chng-det-child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ChngDetChildComponent implements OnInit {

  @Input() data: string[];
  @Input() dataBS: Observable<any>;
  foods: string[] = [];

  constructor(private ch: ChangeDetectorRef) { }

  ngOnInit() {
    this.dataBS.subscribe(food => {
      this.foods = [...this.foods, ...food];
      this.ch.markForCheck();
    });
  }

  refresh() {
    this.ch.detectChanges();
  }

}
