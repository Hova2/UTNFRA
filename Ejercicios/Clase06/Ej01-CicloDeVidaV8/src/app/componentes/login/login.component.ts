import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: Usuario;
  public logueado: boolean;

  constructor(private route: Router, private authService: AuthService) {
    this.usuario = new Usuario();
    this.logueado = false;
  }

  ngOnInit() {
  }

  Loguear() {
    this.authService.login(this.usuario).subscribe(resp => this.route.navigate(['usuario']));
  }

}
