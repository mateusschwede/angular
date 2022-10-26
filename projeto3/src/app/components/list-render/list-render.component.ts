import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  animals: Animal[] = [
    {name: "Max", type: "Lion", age: 4},
    {name: "Fionna", type: "Dog", age: 10},
    {name: "Frida", type: "Cat", age: 5}
  ];

  animal: Animal = {
    name: "Olivia",
    type: "Cat",
    age: 1
  };

  animalDetails = "";

  constructor() { }

  ngOnInit(): void {
  };

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos`;
  };

}
