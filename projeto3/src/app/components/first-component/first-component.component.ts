import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  name: string = "UB Social";
  age: number = 2022;
  distros = ["Debian", "CentOS", "Arch"];
  car = {
    name: "Polo",
    color: "Preto",
    year: 2023
  };

  constructor() { }

  ngOnInit(): void {
  }

}
