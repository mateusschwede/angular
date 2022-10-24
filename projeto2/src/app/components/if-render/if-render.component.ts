import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-render',
  templateUrl: './if-render.component.html',
  styleUrls: ['./if-render.component.css']
})
export class IfRenderComponent implements OnInit {

  ubsocial:boolean = true;
  ubsocial2:boolean = false;
  name:string = "ubsocial";

  constructor() { }

  ngOnInit(): void {
  }

}
