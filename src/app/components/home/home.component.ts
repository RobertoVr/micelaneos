import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <h1>Demo <small>angular</small></h1>
  <hr>
  <app-clases></app-clases>

  <br>
  <hr>
  <h1>Directivas</h1>
  
  <p [appResaltado]= "'blue'"> 
    Hola Mundo Directivas
  </p>

  <br>

  <hr>

  <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
