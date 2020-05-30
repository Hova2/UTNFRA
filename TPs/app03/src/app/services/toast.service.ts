import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private tc: ToastController) {}

  public async mensajesLoguin(codigo: string) {
    let mToast = await this.tc.create({
      duration: 2000,
    });

    switch (codigo) {
      case 'auth/wrong-password':
        mToast.message = 'La clave es incorrecta';
        break;
    }
    mToast.present();
  }
}
