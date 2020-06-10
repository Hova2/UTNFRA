import { Component, OnInit, ViewChild } from '@angular/core';
import { App01FotosI } from 'src/app/interfaces/app01fotos-i';
import { Observable } from 'rxjs/internal/Observable';
import { FotoService } from 'src/app/services/foto.service';
import { AuthService } from 'src/app/services/auth.service';
import { IonSlides } from '@ionic/angular';
import {
  DeviceMotion,
  DeviceMotionAccelerationData,
} from '@ionic-native/device-motion/ngx';

@Component({
  selector: 'app-lfotos',
  templateUrl: './lfotos.page.html',
  styleUrls: ['./lfotos.page.scss'],
})
export class LfotosPage implements OnInit {
  @ViewChild('slider') slider: IonSlides;
  public imagen: string;
  public $listaDeTodasLasFotos: Observable<App01FotosI[]>;
  public slideOpts: any;

  constructor(
    private fs: FotoService,
    private as: AuthService,
    private dm: DeviceMotion
  ) {
    this.$listaDeTodasLasFotos = this.fs.listaDeTodasLasFotos();
    this.slideOpts = {
      initialSlide: 1,
      speed: 400,
    };
  }

  ngOnInit() {
    setTimeout(() => {
      this.sensarMovimiento();
      document.addEventListener('touchstart', ontouchstart, { passive: true });
      document.addEventListener('touchmove', ontouchmove, { passive: true });
      window.addEventListener('touchstart', ontouchstart, { passive: true });
      window.addEventListener('touchmove', ontouchmove, { passive: true });
    }, 1000);
  }

  public votarFoto(elemento: any) {
    this.as.traerUsuarioActual().subscribe((usuario) => {
      elemento.foto.usuariosVotaron.push(usuario.email);
      elemento.noPuedeVotar = true;
      this.fs.actualizarFoto(
        elemento.id,
        JSON.parse(JSON.stringify(elemento.foto))
      );
    });
  }

  private sensarMovimiento() {
    this.dm
      .watchAcceleration({ frequency: 250 })
      .subscribe((ad: DeviceMotionAccelerationData) => {

        if (ad.x <= -8) {
          this.slider.slideNext();
        } else if (ad.x >= 8) {
          this.slider.slidePrev();
        } else if (ad.y >= 8) {
          this.slider.slideTo(0);
        }
      });
  }

  public preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault) {
      e.preventDefault();
    }
    e.returnValue = false;
  }

}
