import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChartsComponent implements OnInit {

  public products: any;
  public ProductName: any;

  constructor() { }

  ngOnInit() {
    this.ProductName = ['s', 'r', 'p'];
    this.products = [1, 8, 4];
  }

}
