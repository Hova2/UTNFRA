import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  public usuario: Usuario = new Usuario();
  public usuarioEditar: Usuario = new Usuario();
  public listadoUsuarios: Array<Usuario> = Array<Usuario>();

  public vista = 'grilla';
  public editar = false;

  constructor() { }

  ngOnInit() {
  }

  AgregarUsuario() {
    const usuario = new Usuario();
    usuario.email = this.usuario.email;
    usuario.password = this.usuario.password;
    this.listadoUsuarios.push(usuario);
    this.usuario = new Usuario();
  }

  GuardarEditar() {
    this.usuario = new Usuario();
    this.editar = false;
  }

  CancelarEditar() {
    this.usuario.email = this.usuarioEditar.email;
    this.usuario.password = this.usuarioEditar.password;
    this.usuario = new Usuario();
    this.editar = false;
  }

  CambiarVista(valor) {
    this.vista = valor;
  }

  EditarUsuario(usuario) {
    this.usuarioEditar = new Usuario();
    this.usuarioEditar.email = usuario.email;
    this.usuarioEditar.password = usuario.password;
    this.usuario = usuario;
    this.editar = true;
  }

  BorrarUsuario(usuario) {
    const index = this.listadoUsuarios.indexOf(usuario);
    this.listadoUsuarios.splice(index, 1);
    this.usuario = new Usuario();
  }

}
