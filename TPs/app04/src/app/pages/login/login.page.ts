import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public formulario: FormGroup;

  constructor() {
    this.formulario = new FormGroup({
      usuario: new FormControl(null, [Validators.required]),
      clave: new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit() {}

  public completarUsuario(usuario) {
    switch (usuario) {
      case 'admin':
        this.formulario.controls.usuario.setValue('admin@admin.com');
        this.formulario.controls.clave.setValue('11111111');
        break;
      case 'invitado':
        this.formulario.controls.usuario.setValue('invitado@invitado.com');
        this.formulario.controls.clave.setValue('22222222');
        break;
      case 'usuario':
        this.formulario.controls.usuario.setValue('usuario@usuario.com');
        this.formulario.controls.clave.setValue('33333333');
        break;
      case 'anonimo':
        this.formulario.controls.usuario.setValue('anonimo@anonimo.com');
        this.formulario.controls.clave.setValue('44444444');
        break;
      case 'tester':
        this.formulario.controls.usuario.setValue('tester@tester.com');
        this.formulario.controls.clave.setValue('55555555');
        break;
    }
  }
}
