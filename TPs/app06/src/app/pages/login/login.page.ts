import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';
import { CargandoService } from 'src/app/services/cargando.service';
import { RutasService } from 'src/app/services/rutas.service';
import { timer } from 'rxjs/internal/observable/timer';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public formulario: FormGroup;
  public usuario: string;

  constructor(
    private as: AuthService,
    private ts: ToastService,
    private cs: CargandoService,
    private rs: RutasService
  ) {
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

  public ingresar() {
    this.as
      .ingresarConMail(
        this.formulario.controls.usuario.value,
        this.formulario.controls.clave.value
      )
      .then((variable) => {
        this.cs.estaCargando(true);
      })
      .catch((error) => {
        this.ts.mensajesLoguin(error.code);
      })
      .finally(() => {
        this.as.existeUsuarioLogueado().subscribe((usuario) => {
          if (usuario) {
            timer(2000).subscribe(() => {
              this.cs.estaCargando(false);
              this.rs.principal();
            });
          }
        });
      });
  }
}
