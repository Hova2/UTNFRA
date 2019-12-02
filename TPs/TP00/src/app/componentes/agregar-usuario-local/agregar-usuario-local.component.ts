import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { LocalService } from 'src/app/servicios/local.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-agregar-usuario-local',
  templateUrl: './agregar-usuario-local.component.html',
  styleUrls: ['./agregar-usuario-local.component.scss']
})
export class AgregarUsuarioLocalComponent implements OnInit {
  locales$: Observable<any>;
  usuarios$: Observable<any>;
  usuarioLocalForm: FormGroup;


  constructor(private ls: LocalService, private us: UsuarioService) {
    this.locales$ = this.ls.traerLocales();
    this.usuarios$ = this.us.traerUsuarios();
    this.usuarioLocalForm = new FormGroup({
      localId: new FormControl(''),
      usuarioId: new FormControl('')
    });
  }

  ngOnInit() {
  }

  guardarForm() {
    const usuario = this.us.traerUsuario(
      this.usuarioLocalForm.value.usuarioId
    );
    this.ls.agregarUsuarioLocal(
      usuario,
      this.usuarioLocalForm.value.localId,
      this.usuarioLocalForm.value.usuarioId
    );
    this.usuarioLocalForm.reset();
  }

  cancelarForm() {
    this.usuarioLocalForm.reset();
  }

}
