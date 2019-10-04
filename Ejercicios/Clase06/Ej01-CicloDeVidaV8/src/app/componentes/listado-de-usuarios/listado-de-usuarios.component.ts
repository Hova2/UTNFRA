import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-listado-de-usuarios',
  templateUrl: './listado-de-usuarios.component.html',
  styleUrls: ['./listado-de-usuarios.component.css']
})
export class ListadoDeUsuariosComponent implements OnInit {

  @Input() listadoUsuarios: Array<Usuario> = Array<Usuario>();
  @Output() editarUsuario: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  Editar(usuario: Usuario) {
    this.editarUsuario.emit(usuario);
  }

}
