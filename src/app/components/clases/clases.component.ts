import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent implements OnInit {

  alerta      : string = "alert-danger";
  propiedades :Object = {
    danger: false
  }
  loading     : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  ejecutar() {
    
    this.loading = true;
    console.log( this.loading )
    
    setTimeout(()=>{ 
      this.loading = false;
      console.log( this.loading )
    }, 3000);

    
  }

}
