import { Component, OnInit, ViewChild } from '@angular/core';
import { IonButton, ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs/internal/Subscription';
import {
  DeviceMotion,
  DeviceMotionAccelerationData,
} from '@ionic-native/device-motion/ngx';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { Flashlight } from '@ionic-native/flashlight/ngx';
import { Vibration } from '@ionic-native/vibration/ngx';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ModalPage } from '../modal/modal.page';
import { ToastService } from 'src/app/services/toast.service';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
  @ViewChild('boton')
  boton: IonButton;
  public textoBoton: string;
  public alarmaActiva: boolean;
  public subscripcion: Subscription;
  public x: any;
  public y: any;
  public z: any;
  public modal: Promise<HTMLIonModalElement>;

  constructor(
    private dm: DeviceMotion,
    private na: NativeAudio,
    private vibrar: Vibration,
    private fl: Flashlight,
    private mc: ModalController,
    private ts: ToastService,
    private as: AuthService
  ) {
    this.textoBoton = 'Activar alarma';
    this.alarmaActiva = false;
    this.na.preloadSimple('hurtando', 'assets/hurtando.mp3');
    this.na.preloadSimple('epa', 'assets/epa.mp3');
    this.na.preloadSimple('vertical', 'assets/vertical.mp3');
    this.na.preloadSimple('horizontal', 'assets/horizontal.mp3');
  }

  ngOnInit() {}

  public estaActiva() {
    this.modal = this.mc.create({
      component: ModalPage,
    });
    if (this.alarmaActiva) {
      this.modal.then((modal) => {
        modal.present();
        modal.onWillDismiss().then((datos) => {
          this.as.traerUsuarioActual().subscribe((usuario) => {
            this.as
              .ingresarConMail(usuario.email, datos.data.clave)
              .then(() => {
                this.alarmaActiva = false;
                this.textoBoton = 'Activar alarma';
                this.boton.color = 'success';
                this.alarmaEstadoDesactivada();
              })
              .catch((error) => {
                this.ts.mensajesLoguin(error.code);
              });
          });
        });
      });
    } else {
      this.alarmaActiva = true;
      this.textoBoton = 'Desactivar alarma';
      this.boton.color = 'danger';
      this.alarmaEstadoActivada();
    }
  }

  private alarmaEstadoActivada() {
    this.subscripcion = this.dm
      .watchAcceleration()
      .subscribe((acceleration: DeviceMotionAccelerationData) => {
        const x = acceleration.x;
        const y = acceleration.y;
        const z = acceleration.z;
        if (x >= 1 && -1 <= y && y <= 1 && 0 <= z && z <= 9) {
          //Izquierda
          this.na.play('hurtando');
        } else if (x <= -1 && -1 <= y && y <= 4 && 0 <= z && z <= 9) {
          //Derecha
          this.na.play('epa');
        } else if (-1 < x && x < 1 && y >= 10 && z < 0) {
          //vertical
          this.na.play('vertical');
          this.fl.switchOn();
          setTimeout(() => {
            this.fl.switchOff();
          }, 5000);
        } else if (-1 <= x && x <= 1 && -1 <= y && y <= 1 && z >= 9) {
          //horizontal
          this.na.play('horizontal');
          this.vibrar.vibrate([2000, 1000, 2000]);
        }
      });
  }

  private alarmaEstadoDesactivada() {
    this.subscripcion.unsubscribe();
  }
}
