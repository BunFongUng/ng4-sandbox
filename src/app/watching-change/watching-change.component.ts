import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-watching-change',
  templateUrl: './watching-change.component.html',
  styleUrls: ['./watching-change.component.css']
})
export class WatchingChangeComponent implements OnInit {
  form: FormGroup;
  sku: any;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      'sku': ['', Validators.required]
    });

    this.sku = this.form.controls['sku'];

    this.sku.valueChanges.subscribe((value: string) => {
      console.log(`sku value: ${value}`);
    });

    this.form.valueChanges.subscribe((data: any) => {
      console.log('form data: ', data);
    });
  }

  ngOnInit() {
  }

}
