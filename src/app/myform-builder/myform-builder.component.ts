import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-myform-builder',
  templateUrl: './myform-builder.component.html',
  styleUrls: ['./myform-builder.component.css']
})
export class MyformBuilderComponent implements OnInit {
  form: FormGroup;
  sku: AbstractControl;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      'sku': ['ABC123', Validators.required]
    });
    this.sku = this.form.controls['sku'];
  }

  addItem(value: any): void {
    console.log(value);
  }

  ngOnInit() {
  }

}
