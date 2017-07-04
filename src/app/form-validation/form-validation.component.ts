import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {
  form: FormGroup;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      'sku': ['', Validators.compose([Validators.required, this.skuValidator])]
    });
  }

  addItem(formData: any): void {
    console.log(formData);
  }

  skuValidator(control: FormControl): { [s: string]: boolean } {
    if (!control.value.match(/^123/)) {
      return { invalidSku: true };
    }
  }
  ngOnInit() {
  }

}
