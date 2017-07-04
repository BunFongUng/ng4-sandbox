import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-deom-form',
  templateUrl: './deom-form.component.html',
  styleUrls: ['./deom-form.component.css']
})
export class DeomFormComponent implements OnInit {

  constructor() { }

  addItems(form: any): void {
    console.log('you have submiited: ', form);
  }

  ngOnInit() {
  }

}
