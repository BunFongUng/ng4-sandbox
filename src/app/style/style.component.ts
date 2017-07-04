import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {
  color: string;
  fontSize: number;

  constructor() {
    this.color = 'black';
    this.fontSize = 12;
  }

  applySetting(color: string, fontSize: number): void {
    this.color = color;
    this.fontSize = fontSize;
  }

  ngOnInit() {
  }

}
