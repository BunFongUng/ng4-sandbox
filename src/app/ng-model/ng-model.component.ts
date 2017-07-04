import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.css']
})
export class NgModelComponent implements OnInit {
  form: FormGroup;
  productName: string;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      'productName': ['', Validators.required]
    });
  }

  onSubmit(form: any): void {
    console.log(form);
  }

  ngOnInit() {
  }

}
