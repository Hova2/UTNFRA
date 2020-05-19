import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioI } from 'src/app/interfaces/usuario-i';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public formulario: FormGroup;
  public usuario: UsuarioI;

  constructor(private as: AuthService) {
    this.formulario = new FormGroup({
      usuario: new FormControl(null, [Validators.required]),
      clave: new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit() {}

  public completarUsuario(usuario: string) {
    switch (usuario) {
      case 'admin':
        this.formulario.controls.usuario.setValue('admin@admin.com');
        this.formulario.controls.clave.setValue('1111');
        this.usuario = {
          id: 1,
          correo: 'admin@admin.com',
          clave: '1111',
          perfil: 'admin',
          sexo: 'femenino',
        };
        break;
      case 'invitado':
        this.formulario.controls.usuario.setValue('invitado@invitado.com');
        this.formulario.controls.clave.setValue('2222');
        this.usuario = {
          id: 2,
          correo: 'invitado@invitado.com',
          clave: '2222',
          perfil: 'invitado',
          sexo: 'femenino',
        };
        break;
      case 'usuario':
        this.formulario.controls.usuario.setValue('usuario@usuario.com');
        this.formulario.controls.clave.setValue('3333');
        this.usuario = {
          id: 3,
          correo: 'usuario@usuario.com',
          clave: '3333',
          perfil: 'usuario',
          sexo: 'masculino',
        };
        break;
      case 'anonimo':
        this.formulario.controls.usuario.setValue('anonimo@anonimo.com');
        this.formulario.controls.clave.setValue('4444');
        this.usuario = {
          id: 4,
          correo: 'anonimo@anonimo.com',
          clave: '4444',
          perfil: 'usuario',
          sexo: 'masculino',
        };
        break;
      case 'tester':
        this.formulario.controls.usuario.setValue('tester@tester.com');
        this.formulario.controls.clave.setValue('5555');
        this.usuario = {
          id: 5,
          correo: 'tester@tester.com',
          clave: '5555',
          perfil: 'tester',
          sexo: 'femenino',
        };
        break;
    }

    //     {"id":1, "correo":"admin@admin.com", "clave":1111, "perfil":"admin", "sexo":"femenino"}
    // {"id":2, "correo":"invitado@invitado.com", "clave":2222, "perfil":"invitado", "sexo":"femenino"}
    // {"id":3, "correo":"usuario@usuario.com", "clave":3333, "perfil":"usuario", "sexo":"masculino"}
    // {"id":4, "correo":"anonimo@anonimo.com", "clave":4444, "perfil":"usuario", "sexo":"masculino"}
    // {"id":5, "correo":"tester@tester.com", "clave":5555, "perfil":"tester","sexo": "femenino"}
  }

  public registrar() {
    this.as.registrarConMail(this.usuario);
  }
}
