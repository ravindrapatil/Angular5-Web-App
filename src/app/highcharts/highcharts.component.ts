import { Component, OnInit, ViewEncapsulation, Input, ElementRef } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-highcharts',
  templateUrl: './highcharts.component.html',
  styleUrls: ['./highcharts.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HighchartsComponent implements OnInit {

  @Input() type: string;
  @Input() category: string;
  @Input() value: string;
  @Input() data: any[];

  constructor(public element: ElementRef) { }

  ngOnInit() {
    Highcharts.chart(this.element.nativeElement, {
      chart: {
        type: this.type
      },
      title: {
        text: 'Fruit Consumption'
      },
      xAxis: {
        categories: ['Apples', 'Bananas', 'Oranges']
      },
      yAxis: {
        title: {
            text: 'Fruit eaten'
        }
      },
      legend: {
        enabled: false
      },
      series: [
        {
          // colorByPoint: true,
          data: this.data
        }
      ]
    });

  }

}
