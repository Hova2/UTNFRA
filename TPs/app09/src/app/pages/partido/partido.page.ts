import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-partido',
  templateUrl: './partido.page.html',
  styleUrls: ['./partido.page.scss'],
})
export class PartidoPage implements OnInit {
  public formulario: FormGroup;
  public listaUsuarios: Observable<string[]>;
  public comparar = (obj1, obj2) => {
    return obj1.toString() === obj2.toString() ? true : false;
  };

  constructor(private us: UsuarioService) {
    this.formulario = new FormGroup({
      jugador1: new FormControl(null, [Validators.required]),
      jugador2: new FormControl(null, [Validators.required]),
      clave: new FormControl(null, [Validators.required]),
    });
    this.listaUsuarios = this.us.listaDeusuarios();
  }

  ngOnInit() {}

  public altaPartido() {
    console.log(this.formulario.controls.jugador1.value);
    console.log(this.formulario.controls.jugador2.value);
  }
}
