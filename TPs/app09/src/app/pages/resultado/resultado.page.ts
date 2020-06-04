import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { PartidoService } from 'src/app/services/partido.service';
import { Observable } from 'rxjs/internal/Observable';
import { CargandoService } from 'src/app/services/cargando.service';
import { ModalController } from '@ionic/angular';
import { CargarResultadoComponent } from 'src/app/components/cargar-resultado/cargar-resultado.component';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.page.html',
  styleUrls: ['./resultado.page.scss'],
})
export class ResultadoPage implements OnInit {
  public $listaDePartidos: Observable<any[]>;
  public cantPartidos: number;

  constructor(
    private ps: PartidoService,
    private cs: CargandoService,
    private mc: ModalController,
    private ts: ToastService
  ) {
    const spinner = this.cs.devolverSpinner();
    spinner.then((elemento) => {
      elemento.present();
    });
    this.cantPartidos = 10;
    this.$listaDePartidos = this.ps.listarPartidos(this.cantPartidos);
    setTimeout(() => {
      spinner.then((elemento) => {
        elemento.dismiss();
      });
    }, 3000);
  }

  ngOnInit() {}

  public async cargarResultado(elemento: any, evento: any) {
    const modal = await this.mc.create({
      component: CargarResultadoComponent,
      componentProps: { elemento: elemento },
      cssClass: '',
      animated: true,
    });
    return await modal.present();
  }

  public cambiarCantPartidos(cant: number) {
    if (cant >= 10) {
      this.cantPartidos = parseInt(cant.toString());
      const spinner = this.cs.devolverSpinner();
      spinner.then((elemento) => {
        elemento.present();
      });
      this.$listaDePartidos = this.ps.listarPartidos(this.cantPartidos);
      setTimeout(() => {
        spinner.then((elemento) => {
          elemento.dismiss();
        });
      }, 2000);
    } else {
      this.ts.mensajeGenerico('Minimo 10 partidos');
    }
  }
}
