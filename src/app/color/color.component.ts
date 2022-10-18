import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  color: string;

  constructor() { }

  ngOnInit(): void {
  }

  onChangeColor(evt): void {
    this.color = evt.target.value;
  }

}
