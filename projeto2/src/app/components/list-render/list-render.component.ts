import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  animals = [
    {name: "Max", type: "Lion"},
    {name: "Fionna", type: "Dog"},
    {name: "Frida", type: "Cat"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
