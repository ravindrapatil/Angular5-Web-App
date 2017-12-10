import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-validate',
  templateUrl: './form-validate.component.html',
  styleUrls: ['./form-validate.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FormValidateComponent implements OnInit {
  loginForm: FormGroup;
  formValues: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  public createForm() {
    this.loginForm = this.fb.group({
      firstname: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10),
        Validators.pattern('^[a-zA-Z0-9]+$')
      ])],
      lastname: ['', this.textValidator],
      email: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(150),
        Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')
      ])],
      address: this.fb.group({
        addressOne: ['', Validators.required],
        addressTwo: ['', Validators.required]
      })
    });
    // this.loginForm = new FormGroup({
    //   firstname: new FormControl('', Validators.compose([
    //     Validators.required,
    //     Validators.minLength(5),
    //     Validators.maxLength(10),
    //     Validators.pattern('^[a-zA-Z0-9]+$')
    //   ])),
    //   lastname: new FormControl('', this.textValidator),
    //   email: new FormControl('', Validators.compose([
    //     Validators.required,
    //     Validators.maxLength(150),
    //     Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')
    //   ])),
    //   address: new FormGroup({
    //     addressOne: new FormControl('', Validators.required),
    //     addressTwo: new FormControl('', Validators.required)
    //   })
    // });
  }

  textValidator(control) {
    if (control.value.length < 3) {
      return {'lastname': true};
    }
  }

  onSubmit(user) {
    console.log(user);
    this.formValues = user;
  }
}
