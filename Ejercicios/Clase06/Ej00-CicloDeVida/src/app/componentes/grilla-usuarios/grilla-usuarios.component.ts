import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-grilla-usuarios',
  templateUrl: './grilla-usuarios.component.html',
  styleUrls: ['./grilla-usuarios.component.css']
})
export class GrillaUsuariosComponent implements OnInit {
  @Input() listadoUsuarios: Array<Usuario> = Array<Usuario>();
  @Output() editarUsuario: EventEmitter<any> = new EventEmitter<any>();
  @Output() borrarUsuario: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  Editar(usuario: Usuario) {
    this.editarUsuario.emit(usuario);
  }

  Borrar(usuario: Usuario) {
    this.borrarUsuario.emit(usuario);
  }

}
