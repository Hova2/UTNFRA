import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public usuarioForm: FormGroup;

  constructor(private as: AuthService, private router: Router) {
    this.usuarioForm = new FormGroup({
      usuario: new FormControl(''),
      password: new FormControl('')
    });
  }

  ngOnInit() {}

  private borrarForm() {
    this.usuarioForm.reset();
  }

  ingresar() {
    this.as.loguearse({
      usuario: this.usuarioForm.value.usuario,
      clave: this.usuarioForm.value.password
    });
    this.borrarForm();
    if (this.as.estaLogueado) {
      this.router.navigate(['/actor/alta']);
    }

  }

  cargarUsuario() {
    this.usuarioForm.get('usuario').setValue('@admin');
    this.usuarioForm.get('password').setValue('123456');
  }

}
