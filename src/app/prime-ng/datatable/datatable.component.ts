import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CarsService } from '../../services/cars.service';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DatatableComponent implements OnInit {
  cars: any;
  loading: any = false;
  cols: any[];

  constructor(private carService: CarsService) { }

  ngOnInit() {
    this.loading = true;
    setTimeout(() => {
      this.carService.getAllCars().subscribe(data => {
        const formatedData = JSON.parse(data._body);
        this.cars = formatedData.data;
        this.loading = false;
      });
    }, 1000);

    this.cols = [
      {field: 'vin', header: 'Vin'},
      {field: 'year', header: 'Year'},
      {field: 'brand', header: 'Brand'},
      {field: 'color', header: 'Color'}
    ];
  }

}
