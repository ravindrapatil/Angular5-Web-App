import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ReactiveformsComponent implements OnInit {
  formData: any;
  reactiveForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      firstname: new FormControl('', {
        validators: Validators.required,
        updateOn: 'submit'
      }),
      lastname: new FormControl('', {
        validators: Validators.required,
        updateOn: 'submit'
      })
    });

    this.reactiveForm.valueChanges
      .filter(data => this.reactiveForm.valid)
      .subscribe(data => {
        console.log(JSON.stringify(data));
        this.formData = data;
    });
  }

  onSubmit() {
    console.log('Form submitted!');
  }

}
