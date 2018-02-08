import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-injected-comp',
  templateUrl: './injected-comp.component.html',
  styleUrls: ['./injected-comp.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InjectedCompComponent implements OnInit {
  productForm: FormGroup;
  productTypes = ['Small', 'Large'];
  allProducts = [
    {name: 'Small Widget1', type: 'Small'},
    {name: 'Small Widget2', type: 'Small'},
    {name: 'Small Widget3', type: 'Small'},
    {name: 'Large Widget1', type: 'Large'},
    {name: 'Large Widget2', type: 'Large'}
  ];
  productsAfterChangeEvent = [];
  formData: any;
  display: Boolean = false;

  constructor(public fb: FormBuilder) {
    this.productForm = fb.group({
      productType: [],
      product: []
    });
  }

  ngOnInit() {}

  typeChanged() {
    this.display = false;
    const productType = this.productForm.get('productType').value;
    console.log(productType);
    this.productsAfterChangeEvent = this.allProducts.filter(p => p.type === productType );
  }

  submitForm() {
    this.formData = this.productForm.value;
    this.display = true;
  }

}
