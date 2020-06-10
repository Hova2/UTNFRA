import { Component, OnInit } from '@angular/core';
import {
  DeviceMotion,
  DeviceMotionAccelerationData,
} from '@ionic-native/device-motion/ngx';
import { JuegoService } from 'src/app/services/juego.service';
import { RutasService } from 'src/app/services/rutas.service';
import { CargandoService } from 'src/app/services/cargando.service';
import { JuegoI } from 'src/app/interfaces/juego-i';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.page.html',
  styleUrls: ['./juego.page.scss'],
})
export class JuegoPage implements OnInit {
  public clasePreparado: string;
  public claseTiempo: string;
  public clasePuntos: string;
  public claseBoton: string;
  public preparadoNumero: number;
  public segundos: number;
  public minutos: number;
  public contTiempo: number;
  public usuario: string;

  public estilosCss: any;
  public posy: number;
  public posx: number;

  public posIniy: number = 0;
  public posInix: number = 0;
  public vely: number;
  public velx: number;
  public contx: number;
  public conty: number;
  public xant: number;
  public yant: number;
  public panAlto: number;
  public panAncho: number;

  constructor(
    private dm: DeviceMotion,
    private js: JuegoService,
    private rs: RutasService,
    private cs: CargandoService,
    private as: AuthService
  ) {
    this.preparadoNumero = 3;
    this.claseTiempo = 'ion-hide';
    this.clasePuntos = 'ion-hide';
    this.claseBoton = 'ion-hide';
    this.segundos = 0;
    this.minutos = 0;
    this.contTiempo = 0;
    this.as.traerUsuarioActual().subscribe((usuario) => {
      this.usuario = usuario.email.split('@', 1).toString();
    });
  }

  ngOnInit() {
    this.panAlto = document.documentElement.clientHeight * 0.9;
    this.panAncho = document.documentElement.clientWidth * 0.8;
    this.posy = this.panAlto / 2;
    this.posx = this.panAncho / 2;
    this.velx = 150;
    this.vely = 150;
    this.contx = 0;
    this.conty = 0;
    this.xant = 0;
    this.yant = 0;

    setTimeout(() => {
      this.preparadoNumero--;
      setTimeout(() => {
        this.preparadoNumero--;
        setTimeout(() => {
          this.clasePreparado = 'ion-hide';
          this.claseTiempo = '';
          this.juego();
        }, 1000);
      }, 1000);
    }, 1000);

    this.estilosCss = document.body.style;
    this.estilosCss.setProperty('--pos-x', this.posx.toString() + 'px');
    this.estilosCss.setProperty('--pos-y', this.posy.toString() + 'px');
    this.estilosCss.setProperty('--color-fondo', 'green');
    this.estilosCss.setProperty(
      '--imagen',
      'url(' + this.js.traerImagen() + ')'
    );

    console.log(this.js.traerImagen());
  }

  private juego() {
    const subsJuegoX = this.dm
      .watchAcceleration({ frequency: 1 })
      .subscribe((ad: DeviceMotionAccelerationData) => {
        if (parseInt(ad.x.toString()) !== 0) {
          if (this.xant !== ad.x) {
            this.contx = 0;
            this.xant = ad.x;
          } else {
            this.contx = this.contx + 1;
          }
          this.velx = parseInt(
            (150 / parseInt(Math.abs(ad.x).toString()) + this.contx).toString()
          );
        } else {
          this.velx = 150;
        }

        setTimeout(() => {
          if (
            parseFloat(parseFloat(ad.x.toString()).toPrecision(2)) >= -0.01 &&
            parseFloat(parseFloat(ad.x.toString()).toPrecision(2)) <= 0.01
          ) {
            this.posx = this.posx;
          } else if (
            parseFloat(parseFloat(ad.x.toString()).toPrecision(2)) > 0.05
          ) {
            this.posx = this.posx - 1;
          } else {
            this.posx = this.posx + 1;
          }
        }, this.velx);

        this.estilosCss.setProperty('--pos-x', this.posx.toString() + 'px');

        if (
          this.posx <= -10 ||
          this.posy <= 0 ||
          this.posy >= this.panAlto ||
          this.posx >= this.panAncho + 10
        ) {
          this.estilosCss.setProperty('--color-fondo', 'red');
          this.clasePuntos = '';
          this.claseBoton = '';
          subsJuegoX.unsubscribe();
          subsJuegoY.unsubscribe();
          subsTimer.unsubscribe();
        }
      });

    const subsJuegoY = this.dm
      .watchAcceleration({ frequency: 1 })
      .subscribe((ad: DeviceMotionAccelerationData) => {
        if (parseInt(ad.y.toString()) !== 0) {
          if (this.yant !== ad.y) {
            this.conty = 0;
            this.yant = ad.y;
          } else {
            this.conty = this.conty + 1;
          }
          this.velx = parseInt(
            (150 / parseInt(Math.abs(ad.x).toString()) + this.conty).toString()
          );
        } else {
          this.vely = 150;
        }

        setTimeout(() => {
          if (
            parseFloat(parseFloat(ad.y.toString()).toPrecision(2)) >= -0.01 &&
            parseFloat(parseFloat(ad.y.toString()).toPrecision(2)) <= 0.01
          ) {
            this.posy = this.posy;
          } else if (
            parseFloat(parseFloat(ad.y.toString()).toPrecision(2)) > 0.01
          ) {
            this.posy = this.posy + 1;
          } else {
            this.posy = this.posy - 1;
          }
        }, this.vely);

        this.estilosCss.setProperty('--pos-y', this.posy.toString() + 'px');

        if (
          this.posx <= -10 ||
          this.posy <= 0 ||
          this.posy >= this.panAlto ||
          this.posx >= this.panAncho + 8
        ) {
          this.estilosCss.setProperty('--color-fondo', 'red');
          this.clasePuntos = '';
          this.claseBoton = '';
          subsJuegoX.unsubscribe();
          subsJuegoY.unsubscribe();
          subsTimer.unsubscribe();
        }
      });

    const subsTimer = this.dm
      .watchAcceleration({ frequency: 1 })
      .subscribe((ad: DeviceMotionAccelerationData) => {
        this.contTiempo++;
        if (this.contTiempo % 100 === 0) {
          this.segundos++;
          if (this.segundos === 59) {
            this.minutos++;
            this.segundos = 0;
          }
        }
      });
  }

  public volver() {
    const spinner = this.cs.devolverSpinner();
    const juegoTmp: JuegoI = {
      usuario: this.usuario,
      puntos: this.contTiempo,
    };
    spinner.then((elemento) => {
      elemento.present();
    });
    this.js.agregarJuego(juegoTmp).finally(() => {
      setTimeout(() => {
        spinner.then((elemento) => {
          elemento.dismiss();
        });
        this.rs.principal();
      }, 3000);
    });
  }
}
