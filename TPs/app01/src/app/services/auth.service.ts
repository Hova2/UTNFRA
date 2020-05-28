import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { User } from 'firebase';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afa: AngularFireAuth) {
    this.afa.setPersistence('none');
  }

  public ingresarConMail(
    email: string,
    pwd: string
  ): Promise<firebase.auth.UserCredential> {
    return this.afa.signInWithEmailAndPassword(email, pwd);
  }

  public existeUsuarioLogueado(): Observable<User> {
    return this.afa.authState;
  }

  public traerUsuarioActual(): Observable<User>{
    return this.afa.authState;
  }

}
