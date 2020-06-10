import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: []
})
export class UsuarioNuevoComponent implements OnInit {

  constructor( private route:ActivatedRoute) { 
    const id = this.route.parent.snapshot.paramMap.get('id')
    console.log( "Ruta hija nnuevo  " + id );
  }

  ngOnInit() {
  }

}
