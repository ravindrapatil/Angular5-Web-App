import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-nvd3',
  templateUrl: './nvd3.component.html',
  styleUrls: ['./nvd3.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Nvd3Component implements OnInit {
  public options: any;
  public data: any;

  constructor() {
    this.options = {
      chart: {
        type: 'lineChart',
        useInteractiveGuideline: true,
        height: 450,
        transitionDuration: 350,
        showLegend: false,
        margin: {
          top: 20,
          right: 20,
          bottom: 40,
          left: 55
        },
        x: (d) => d.x,
        y: (d) => d.y,
        xScale: d3.time.scale(),
        xAxis: {
          ticks: d3.time.months,
          tickFormat: (d) => {
              return d3.time.format('%b')(new Date(d));
          }
        },
        yAxis: {
          axisLabel: 'Gross volume',
          tickFormat: (d) => {
              if (d == null) {
                  return 0;
              }
              return d3.format('.02f')(d);
          },
          axisLabelDistance: 400
        }
      }
    };

    this.data = [
      {
        key: 'Cumulative Return',
        values: [
          {
            'label' : 'A' ,
            'value' : -29.765957771107
          },
          {
            'label' : 'B' ,
            'value' : 0
          },
          {
            'label' : 'C' ,
            'value' : 32.807804682612
          }
        ]
      }
    ];
  }

  ngOnInit() {
  }

}
