import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CargandoService {
  private cargando: Promise<HTMLIonLoadingElement>;
  constructor(private lc: LoadingController) {
    this.cargando = this.lc.create({
      message:
        '<img class="animation-target imagen-carga" src="../../assets/icon.png" />',
    });
  }

  public estaCargando(variable: boolean) {
    if (variable) {
      this.cargando.then((elemento) => {
        elemento.present();
      });
    } else {
      this.cargando.then((elemento) => {
        elemento.dismiss();
      });
    }
  }
}
