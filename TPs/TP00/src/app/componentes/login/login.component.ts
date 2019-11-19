import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Rol } from 'src/app/enums/rol.enum';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public usuarioForm: FormGroup;

  constructor(private as: AuthService, private router: Router) {
    this.usuarioForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
  }

  ngOnInit() {}

  private borrarForm() {
    this.usuarioForm.reset();
  }

  ingresar() {
    this.as.ingresar(
      this.usuarioForm.value.email,
      this.usuarioForm.value.password
    );
    this.borrarForm();
    this.as.traerUsuarioActivo().subscribe(usuario => {
      if (usuario) {
        switch (usuario.rol) {
          case Rol.Admin:
            this.router.navigate(['/administrador']);
            break;
          case Rol.Usuario:
            this.router.navigate(['/usuario']);
            break;
        }
      }
    });
  }

  registrarse() {
    this.borrarForm();
    this.router.navigate(['/altausuario']);
  }

  cargarUsuario() {
    this.usuarioForm.get('email').setValue('usuario@usuario.com');
    this.usuarioForm.get('password').setValue('usuariousuario');
  }

  cargarAdministrador() {
    this.usuarioForm.get('email').setValue('admin@admin.com');
    this.usuarioForm.get('password').setValue('adminadmin');
  }
}
