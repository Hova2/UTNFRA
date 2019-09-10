import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../clases/usuario';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public miUsuario:Usuario;
  public mostrar:boolean;

  constructor(private router:Router) {
    this.miUsuario = new Usuario;
   }

  ngOnInit() {
  }

  loguear() {
    console.info("Objeto,",this.miUsuario);
    if(this.miUsuario.nombre == "usuario@usuario.com"){
      console.log("hola");
      this.mostrar = false;
      //this.router.navigateByUrl('/bienvenido');
    }else{
      this.mostrar = true;
      console.log("chau");
      //this.router.navigateByUrl('/error');
    }
  }
}
