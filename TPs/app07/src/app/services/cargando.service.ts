import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class CargandoService {
  constructor(private lc: LoadingController) {}

  public devolverSpinner(): Promise<HTMLIonLoadingElement> {
    let cargando: Promise<HTMLIonLoadingElement>;
    cargando = this.lc.create({
      spinner: null,
      message:
        '<img class="animation-target imagen-carga" src="../../assets/icon.png" />',
    });
    return cargando;
  }
}
