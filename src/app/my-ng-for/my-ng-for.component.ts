import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-my-ng-for',
  templateUrl: './my-ng-for.component.html',
  styleUrls: ['./my-ng-for.component.css']
})
export class MyNgForComponent implements OnInit {
  peoplesByCity: object[];

  constructor() {
    this.peoplesByCity = [
      {
        city: 'Miami',
        peoples: [
          { name: 'John', age: 12 },
          { name: 'Angel', age: 22 }
        ]
      },
      {
        city: 'Sao Paulo',
        peoples: [
          { name: 'Anderson', age: 35 },
          { name: 'Felipe', age: 36 }
        ]
      }
    ];
  }

  ngOnInit() {
  }

}
