import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../clases/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    public usuario: Usuario;
  
    constructor() { 
      this.usuario = new Usuario;
    }

  ngOnInit() {
  }

  loguear(){
    console.info('objeto',this.usuario);
  }

}
