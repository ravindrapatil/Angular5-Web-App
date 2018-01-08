import { Component, OnInit, ViewEncapsulation, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChangeDetectionComponent implements OnInit {
  foods = ['Bacon', 'Lettuce', 'Tomatoes'];
  foodValue: String = '';
  foodValue2: String = '';

  foodsBS = new BehaviorSubject(['Bacon 2', 'Letuce 2', 'Tomatoes 3']);

  constructor(private el: ElementRef) { }

  ngOnInit() {
  }

  // Istead of doing this, we will follow the next addFood function
  // addFood(food) {
  //   this.foods.push(food);
  //   console.log(this.foods);
  // }

  addFood(food) {
    this.foods = [...this.foods, food];
    this.foodValue = null;
  }

  behaviorSubject(food) {
    this.foodsBS.next(food);
    this.foodValue2 = null;
  }

}
