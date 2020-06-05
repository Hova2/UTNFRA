import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { PartidoService } from 'src/app/services/partido.service';
import { CargandoService } from 'src/app/services/cargando.service';
import { ModalController } from '@ionic/angular';
import { ToastService } from 'src/app/services/toast.service';
import { CargarFotoComponent } from 'src/app/components/cargar-foto/cargar-foto.component';
import { CargarVideoComponent } from 'src/app/components/cargar-video/cargar-video.component';

@Component({
  selector: 'app-foto-yvideo',
  templateUrl: './foto-yvideo.page.html',
  styleUrls: ['./foto-yvideo.page.scss'],
})
export class FotoYVideoPage implements OnInit {
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

  public async cargarFoto(elemento: any) {
    const modal = await this.mc.create({
      component: CargarFotoComponent,
      componentProps: { elemento: elemento },
      cssClass: '',
      animated: true,
    });
    return await modal.present();
  }

  public async cargarVideo(elemento: any) {
    const modal = await this.mc.create({
      component: CargarVideoComponent,
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
      }, 3000);
    } else {
      this.ts.mensajeGenerico('Minimo 10 partidos');
    }
  }
}
