import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Rol } from 'src/app/enums/rol.enum';
import { AuthService } from 'src/app/servicios/auth.service';


@Component({
  selector: 'app-alta-usuario',
  templateUrl: './alta-usuario.component.html',
  styleUrls: ['./alta-usuario.component.scss']
})
export class AltaUsuarioComponent implements OnInit {
  public usuarioForm: FormGroup;
  public archivo: File;

  constructor(private as: AuthService, private router: Router) {
    this.usuarioForm = new FormGroup({
      nombre: new FormControl(''),
      apellido: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      foto: new FormControl('')
    });
  }

  private borrarForm() {
    this.usuarioForm.reset();
  }

  guardarForm() {
    const usuarioTmp = {
      nombre: this.usuarioForm.value.nombre,
      apellido: this.usuarioForm.value.apellido,
      foto: '',
      activo: true,
      rol: Rol.Usuario
    };

    this.as.registracion(
      usuarioTmp,
      this.usuarioForm.value.email,
      this.usuarioForm.value.password,
      this.usuarioForm.value.foto.files
    );

    this.borrarForm();
  }

  cancelarForm(){
    this.borrarForm();
    this.router.navigate(['/login']);

  }

  ngOnInit() {}
}
