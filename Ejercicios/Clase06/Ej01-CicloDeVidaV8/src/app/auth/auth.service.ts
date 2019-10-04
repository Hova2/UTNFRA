import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { Usuario } from '../clases/usuario';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;

  usrLogueado : Usuario;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(usuario:Usuario): Observable<boolean> {
    this.usrLogueado=usuario;

    if(usuario.email == "admin"){
      this.usrLogueado.perfil = "admin";
    }
    localStorage.setItem("usuario", JSON.stringify(this.usrLogueado.email));
    return of(true).pipe(
      
      delay(1000),
      tap(val =>this.isLoggedIn = true
      )
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
