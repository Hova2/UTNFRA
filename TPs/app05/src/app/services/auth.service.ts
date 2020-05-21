import { Injectable } from '@angular/core';

import { UsuarioService } from './usuario.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { UsuarioI } from '../interfaces/usuario-i';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afa: AngularFireAuth, private us: UsuarioService) {}

    // public registrarConMailAdmin(usuario: UsuarioI) {
  //   return new Promise((resolve, reject) => {
  //     this.afa.auth
  //       .createUserWithEmailAndPassword(usuario.email, usuario.password)
  //       .then((datosUsuario) => {
  //         resolve(datosUsuario);
  //       })
  //       .catch();
  //   });
  // }

  // public ingresarConMail(email: string, pwd: string) {
  //   return new Promise((resolve, reject) => {
  //     this.afa.auth
  //       .signInWithEmailAndPassword(email, pwd)
  //       .then((datosUsuario) => {
  //         resolve(datosUsuario);
  //       })
  //       .catch((error) => reject(error));
  //   });
  // }

  // public signOut(): void {
  //   this.afa.auth.signOut();
  // }

  // public traerUsuarioActual(): Promise<Usuario> {
  //   return this.traerMailActual().then((email) => {
  //     if (!email) {
  //       reject('error');
  //     }

  //     return this.us.traerUsuario(email).then((usuario) => {
  //       return this.sacarPassword(usuario);
  //     });
  //   });
  // }

  // public traerEmailUsuarioAuthFirebase(): Promise<string> {
  //   return this.afa.user
  //     .pipe(
  //       take(1),
  //       map((usuario) => {
  //         return usuario.email;
  //       })
  //     )
  //     .toPromise();
  // }

  // public redireccionConRol(rol: string): void {
  //   switch (rol) {
  //     case Rol.cliente:
  //       this.router.navigate(['/cliente']);
  //       break;
  //     case Rol.mozo:
  //       this.router.navigate(['/mozo']);
  //       break;
  //     case Rol.socio:
  //       this.router.navigate(['/socio']);
  //       break;
  //     case Rol.cocinero:
  //       this.router.navigate(['/cocinero']);
  //       break;
  //     case Rol.cervecero:
  //       this.router.navigate(['/cervecero']);
  //       break;
  //     case Rol.bartender:
  //       this.router.navigate(['/bartender']);
  //       break;
  //     default:
  //       alert('No tiene rol.');
  //       break;
  //   }
  // }

  // private traerMailActual(): Promise<string> {
  //   return this.afa.user
  //     .pipe(
  //       take(1),
  //       map((usuario) => usuario.email)
  //     )
  //     .toPromise();
  // }

  // private sacarPassword(usuario: UsuarioI): UsuarioI {
  //   usuario.password = '';
  //   return usuario;
  // }
}
