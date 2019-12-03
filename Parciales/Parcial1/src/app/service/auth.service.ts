import { Injectable } from '@angular/core';
import { UsuarioI } from '../interface/usuario-i';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuarioLogueado: UsuarioI;

  constructor() {}

  loguearse(usuario: UsuarioI) {
    this.usuarioLogueado = usuario;
    if (
      (usuario.usuario === '@admin' && usuario.clave === '123456') ||
      (usuario.usuario === '@cliente' && usuario.clave === '654321') ||
      (usuario.usuario === '@visitante' && usuario.clave === '13579')
    ) {
      localStorage.setItem(
        'usuarioLogueado',
        JSON.stringify(this.usuarioLogueado)
      );
    }
  }

  estaLogueado(): boolean{
    const usuario = JSON.parse(localStorage.getItem('usuarioLogueado'));
    if (usuario){
      return true;
    } else {
      return false;
    }
  }

  desloguearse() {
    localStorage.setItem(
      'usuarioLogueado',
      ''
    );
  }
}
