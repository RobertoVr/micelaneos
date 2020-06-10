import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-editar',
  template: `
    <p>
      usuario-editar works!
    </p>
  `,
  styles: []
})
export class UsuarioEditarComponent implements OnInit {

  constructor( private route:ActivatedRoute) { 
    const id = this.route.parent.snapshot.paramMap.get('id')
    console.log( "Ruta hija editar " + id );
  }


  ngOnInit() {
  }

}
