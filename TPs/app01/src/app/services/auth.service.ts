import { Injectable } from '@angular/core';

import { UsuarioService } from './usuario.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { User } from 'firebase';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afa: AngularFireAuth, private us: UsuarioService) {
    this.afa.setPersistence('none');
  }

  public ingresarConMail(
    email: string,
    pwd: string
  ): Promise<firebase.auth.UserCredential> {
    return this.afa.signInWithEmailAndPassword(email, pwd);
  }

  public existeUsuarioLogueado(): Observable<User>{
    return this.afa.authState;
  }

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
