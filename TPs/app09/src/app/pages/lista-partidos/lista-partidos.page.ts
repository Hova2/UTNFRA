import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { PartidoService } from 'src/app/services/partido.service';
import { Observable } from 'rxjs/internal/Observable';
import { CargandoService } from 'src/app/services/cargando.service';
import { ModalController } from '@ionic/angular';
import { CargarResultadoComponent } from 'src/app/components/cargar-resultado/cargar-resultado.component';
import { ToastService } from 'src/app/services/toast.service';
import { MostrarFotoComponent } from 'src/app/components/mostrar-foto/mostrar-foto.component';
import { MostrarVideoComponent } from 'src/app/components/mostrar-video/mostrar-video.component';

@Component({
  selector: 'app-lista-partidos',
  templateUrl: './lista-partidos.page.html',
  styleUrls: ['./lista-partidos.page.scss'],
})
export class ListaPartidosPage implements OnInit {
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
    this.$listaDePartidos = this.ps.listarPartidosTerminados(this.cantPartidos);
    setTimeout(() => {
      spinner.then((elemento) => {
        elemento.dismiss();
      });
    }, 3000);
  }

  ngOnInit() {}

  public async verFoto(elemento: any) {
    const modal = await this.mc.create({
      component: MostrarFotoComponent,
      componentProps: { elemento: elemento },
      cssClass: '',
      animated: true,
    });
    return await modal.present();
  }

  public async verVideo(elemento: any) {
    const modal = await this.mc.create({
      component: MostrarVideoComponent,
      componentProps: { elemento: elemento },
      cssClass: '',
      animated: true,
    });
    return await modal.present();
  }
}
