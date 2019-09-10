import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';
import { Usuario } from '../clases/usuario';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public mostrar:boolean;

  authenticationState = new BehaviorSubject(false);
  constructor(private storage : Storage, private plt: Platform) {
    this.plt.ready().then(() => {
      this.checkToken();
    });
   }

   login(miUsuario:Usuario){
    /*return this.storage.set(TOKEN_KEY, "Hola 123").then(res => {
      this.authenticationState.next(true);
    });*/
    console.info("Objeto,",miUsuario);

    if(miUsuario.nombre == "usuario" && miUsuario.clave == "usuario"){
      console.log("hola");
      this.mostrar = false;
      this.authenticationState.next(true);
      return true;
    }if(miUsuario.nombre == "admin" && miUsuario.clave == "admin"){
      console.log("hola");
      this.mostrar = false;
      this.authenticationState.next(true);
      return true;
    }else{
      
      console.log("chau");
      this.mostrar = true;
      return false;
    }
   }

   logout(){
    return this.storage.remove(TOKEN_KEY).then(() => {
      this.authenticationState.next(false);
    });
   }

   isAuthenticated(){
    return this.authenticationState.value;
   }

   checkToken(){
    return this.storage.get(TOKEN_KEY).then(res => {
      if(res){
        this.authenticationState.next(true);
        }
      });
   }
}
