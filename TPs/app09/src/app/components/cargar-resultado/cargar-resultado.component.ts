import { Component, OnInit, ViewChild } from '@angular/core';
import { NavParams, ModalController, IonInput } from '@ionic/angular';
import { ToastService } from 'src/app/services/toast.service';
import { CargandoService } from 'src/app/services/cargando.service';
import { PartidoService } from 'src/app/services/partido.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-cargar-resultado',
  templateUrl: './cargar-resultado.component.html',
  styleUrls: ['./cargar-resultado.component.scss'],
})
export class CargarResultadoComponent implements OnInit {
  public elemento: any;
  @ViewChild('igolesjug1') golesJug1: any;
  @ViewChild('igolesjug2') golesJug2: any;

  constructor(
    private mc: ModalController,
    private np: NavParams,
    private tc: ToastService,
    private cs: CargandoService,
    private ps: PartidoService
  ) {
    this.elemento = this.np.get('elemento');
  }

  ngOnInit() {
    setTimeout(() => {
      this.golesJug1.nativeElement.value = this.elemento.partido.golesJug1;
      this.golesJug2.nativeElement.value = this.elemento.partido.golesJug2;
    }, 200);
  }

  public cargarResultado() {
    const golesJug1 = this.golesJug1.nativeElement.value;
    const golesJug2 = this.golesJug2.nativeElement.value;

    if (
      golesJug1 === null ||
      golesJug1 === '' ||
      golesJug2 === null ||
      golesJug2 === ''
    ) {
      this.tc.mensajeGenerico('Los goles son obligatorios');
    } else if (
      !(parseInt(golesJug1) >= 0 && parseInt(golesJug1) <= 7) ||
      !(parseInt(golesJug2) >= 0 && parseInt(golesJug2) <= 7)
    ) {
      this.tc.mensajeGenerico('Los goles deben estar entre 0 y 7');
    } else if (parseInt(golesJug1) + parseInt(golesJug2) > 7) {
      this.tc.mensajeGenerico('La suma de los goles no puede ser mayor a 7.');
    } else {
      const spinner = this.cs.devolverSpinner();
      this.elemento.partido.golesJug1 = golesJug1;
      this.elemento.partido.golesJug2 = golesJug2;
      this.elemento.partido.terminado = true;
      spinner.then((elemento) => {
        elemento.present();
      });
      this.ps
        .actualizarPartido(this.elemento.id, this.elemento.partido)
        .finally(() => {
          setTimeout(() => {
            spinner.then((elemento) => {
              elemento.dismiss();
            });
            this.tc.mensajeGenerico(
              'El resultado se dio de alta correctamente'
            );
            setTimeout(() => {
              this.salir();
            }, 1500);
          }, 3000);
        });
    }
  }

  public salir() {
    this.mc.dismiss();
  }
}
