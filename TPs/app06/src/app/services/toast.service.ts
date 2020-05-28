import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  constructor(private tc: ToastController) {}

  public async mensajesLoguin(codigo: string) {
    let mToast = await this.tc.create({
      duration: 2000,
    });

    switch (codigo) {
      case 'auth/wrong-password':
        mToast.message = 'El usuario o clave son incorrectos';
        break;
      case 'auth/too-many-requests':
        mToast.message = 'Demasiados intentos erroneos, espere unos instantes';
        break;
      case 'auth/invalid-email':
        mToast.message = 'El usuario es obligatorio';
        break;
      case 'auth/argument-error':
        mToast.message = 'El usuario y la clave son obligatorios';
        break;
    }
    mToast.present();
  }
}

