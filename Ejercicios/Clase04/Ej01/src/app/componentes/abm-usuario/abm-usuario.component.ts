import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Usuario } from '../../clases/usuario';

@Component({
  selector: 'app-abm-usuario',
  templateUrl: './abm-usuario.component.html',
  styleUrls: ['./abm-usuario.component.css']
})
export class AbmUsuarioComponent implements OnInit {

  @Output() creeUnUsuario: EventEmitter<any>;
  @Input() usuarioParaEditar: Usuario;

  constructor() {
     this.creeUnUsuario = new EventEmitter<any>();
  }

  ngOnInit() {
  }

  agregar() {

    /*this.listadoUsuario.push(new Usuario(this.miUsuario.nombre, this.miUsuario.clave));
    console.info("listado", this.listadoUsuario);*/
    const nuevoUsuario: Usuario = {nombre: this.usuarioParaEditar.nombre, clave: this.usuarioParaEditar.clave};
    this.creeUnUsuario.emit(nuevoUsuario);
  }

}
