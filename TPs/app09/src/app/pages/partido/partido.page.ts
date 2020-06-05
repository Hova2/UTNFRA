import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ToastService } from 'src/app/services/toast.service';
import { PartidoService } from 'src/app/services/partido.service';
import { PartidoI } from 'src/app/interfaces/partido-i';
import { CargandoService } from 'src/app/services/cargando.service';

@Component({
  selector: 'app-partido',
  templateUrl: './partido.page.html',
  styleUrls: ['./partido.page.scss'],
})
export class PartidoPage implements OnInit {
  public formulario: FormGroup;
  public listaUsuarios1: string[];
  public listaUsuarios2: string[];
  public opcionesDelDatePicker: any;

  constructor(
    private us: UsuarioService,
    private tc: ToastService,
    private ps: PartidoService,
    private cs: CargandoService
  ) {
    this.formulario = new FormGroup({
      jugador1: new FormControl(null),
      jugador2: new FormControl(null),
      golesJug1: new FormControl(null),
      golesJug2: new FormControl(null),
      fecha: new FormControl(null),
    });

    this.opcionesDelDatePicker = {
      cssClass: 'color-texto',
    };

    this.us.listaDeusuarios();
  }

  ngOnInit() {}

  public altaPartido() {
    const jugador1 = this.formulario.controls.jugador1.value;
    const jugador2 = this.formulario.controls.jugador2.value;
    const fecha = this.formulario.controls.fecha.value;

    const subs = this.us.listaDeusuarios().subscribe((arreglo) => {
      if (jugador1 === null || jugador1 === '') {
        this.tc.mensajeGenerico('El jugador 1 es obligatorio');
      } else if (jugador2 === null || jugador2 === '') {
        this.tc.mensajeGenerico('El jugador 2 es obligatorio');
      } else if (!arreglo.includes(jugador1)) {
        this.tc.mensajeGenerico('El jugador 1 no existe');
      } else if (!arreglo.includes(jugador2)) {
        this.tc.mensajeGenerico('El jugador 2 no existe');
      } else if (fecha === null || fecha === '') {
        this.tc.mensajeGenerico('La fecha es obligatoria');
      } else if (jugador1 === jugador2) {
        this.tc.mensajeGenerico('Los jugadores deben ser diferentes');
      } else {
        const spinner = this.cs.devolverSpinner();
        const parTmp: PartidoI = {
          jugador1: jugador1,
          jugador2: jugador2,
          fecha: new Date(fecha),
          terminado: false,
          urlFoto: '',
          urlVideo: '',
        };
        spinner.then((elemento) => {
          elemento.present();
        });
        this.ps.agregarPartido(parTmp).finally(() => {
          setTimeout(() => {
            spinner.then((elemento) => {
              elemento.dismiss();
            });
            this.tc.mensajeGenerico('El partido se dio de alta correctamente');
            this.formulario.controls.jugador1.setValue('');
            this.formulario.controls.jugador2.setValue('');
            this.formulario.controls.fecha.setValue('');
            this.listaUsuarios1 = null;
            this.listaUsuarios2 = null;
          }, 3000);
        });
      }
    });
    setTimeout(() => {
      subs.unsubscribe();
    }, 5000);
  }

  public devolverListaUsuarios1(evento: any) {
    const val = evento.target.value;
    if (val && val.trim() != '') {
      this.us.listaDeusuarios().subscribe((arreglo) => {
        this.listaUsuarios1 = arreglo.filter((item) => {
          return (
            item
              .toString()
              .toLowerCase()
              .indexOf(val.toString().toLowerCase()) > -1
          );
        });
      });
    } else {
      this.listaUsuarios1 = null;
    }
  }

  public elegirJugador1(usuario: string) {
    this.formulario.controls.jugador1.setValue(usuario);
    this.listaUsuarios1 = null;
  }

  public devolverListaUsuarios2(evento: any) {
    const val = evento.target.value;
    if (val && val.trim() != '') {
      this.us.listaDeusuarios().subscribe((arreglo) => {
        this.listaUsuarios2 = arreglo.filter((item) => {
          return (
            item
              .toString()
              .toLowerCase()
              .indexOf(val.toString().toLowerCase()) > -1
          );
        });
      });
    } else {
      this.listaUsuarios2 = null;
    }
  }

  public elegirJugador2(usuario: string) {
    this.formulario.controls.jugador2.setValue(usuario);
    this.listaUsuarios2 = null;
  }
}
