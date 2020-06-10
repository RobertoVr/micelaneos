import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-detalle',
  template: `
    <p>
      usuario-detalle works!
    </p>
  `,
  styles: []
})
export class UsuarioDetalleComponent implements OnInit {

  constructor( private route:ActivatedRoute) { 
    const id = this.route.parent.snapshot.paramMap.get('id')
    console.log( "Ruta hija detalle " + id );
  }


  ngOnInit() {
  }

}
