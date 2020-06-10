import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { RutasService } from 'src/app/services/rutas.service';
import { Observable } from 'rxjs/internal/Observable';
import { AlarmaService } from 'src/app/services/alarma.service';
import { CargandoService } from 'src/app/services/cargando.service';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { AuthService } from 'src/app/services/auth.service';
import { ModalController } from '@ionic/angular';
import { CargarAudioComponent } from 'src/app/components/cargar-audio/cargar-audio.component';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
  public listaAlarmas: Observable<any[]>;
  public usuarioLogueado: string;
  public latitud: any;
  public longitud: any;
  public arregloAlarmas: Array<any>;
  public audioAlarma: MediaObject;
  public enPlay: boolean;

  constructor(
    private ngeol: Geolocation,
    private rs: RutasService,
    private as: AlarmaService,
    private cs: CargandoService,
    private media: Media,
    private auths: AuthService,
    private mc: ModalController,
    private tc: ToastService
  ) {
    this.auths.traerUsuarioActual().subscribe((datos) => {
      this.usuarioLogueado = datos.email;
    });
    this.arregloAlarmas = new Array<any>();

    this.enPlay = false;
    const spinner = this.cs.devolverSpinner();
    spinner.then((elemento) => {
      elemento.present();
    });

    setTimeout(() => {
      this.listaAlarmas = this.as.listarAlarmas(this.usuarioLogueado);
      this.listaAlarmas.subscribe((elementos) => {
        this.arregloAlarmas.forEach((elemento) => {
          this.arregloAlarmas.pop();
        });

        elementos.forEach((elemento) => {
          const alarmaTmp = {
            latitud: elemento.alarma.latitud,
            longitud: elemento.alarma.longitud,
            distancia: elemento.alarma.distancia,
            audio: this.media.create(elemento.alarma.urlAudio),
          };
          this.arregloAlarmas.push(alarmaTmp);
        });
      });
      spinner.then((elemento) => {
        elemento.dismiss();
      });
    }, 3000);
  }

  ngOnInit() {
    setTimeout(() => {
      this.ngeol
        .watchPosition({ enableHighAccuracy: true })
        .subscribe((datos) => {
          this.arregloAlarmas.forEach((alarma) => {
            const distancia = this.calcularDistancia(
              {
                latitude: alarma.latitud,
                longitude: alarma.longitud,
              },
              {
                latitude: datos.coords.latitude,
                longitude: datos.coords.longitude,
              }
            );

            if (distancia * 1000 < alarma.distancia && !this.enPlay) {
              alarma.audio.onStatusUpdate.subscribe((datos) => {
                if (datos === 1 || datos === 2) {
                  this.enPlay = true;
                } else {
                  this.enPlay = false;
                  alarma.audio.stop();
                }
              });
              alarma.audio.play();
            }
          });
        });
    }, 3000);
  }

  public cargarAlarma() {
    this.rs.cargaAlarma();
  }

  public async cargarAudio(elemento: any) {
    const modal = await this.mc.create({
      component: CargarAudioComponent,
      componentProps: { elemento: elemento },
      cssClass: '',
      animated: true,
    });
    return await modal.present();
  }

  public borrarAlarma(elemento: any) {
    const spinner = this.cs.devolverSpinner();
    spinner.then((elemento) => {
      elemento.present();
    });
    this.as.borrarAlarma(elemento.id).finally(() => {
      setTimeout(() => {
        spinner.then((elemento) => {
          elemento.dismiss();
        });
        this.tc.mensajeGenerico('La alarma se dio de baja correctamente');
      }, 3000);
    });
  }

  private toRad(value) {
    const RADIANT_CONSTANT = 0.0174532925199433;
    return value * RADIANT_CONSTANT;
  }

  private calcularDistancia(starting, ending) {
    const KM_RATIO = 6371;
    try {
      const dLat = this.toRad(ending.latitude - starting.latitude);
      const dLon = this.toRad(ending.longitude - starting.longitude);
      const lat1Rad = this.toRad(starting.latitude);
      const lat2Rad = this.toRad(ending.latitude);

      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.sin(dLon / 2) *
          Math.sin(dLon / 2) *
          Math.cos(lat1Rad) *
          Math.cos(lat2Rad);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const d = KM_RATIO * c;
      return d;
    } catch (e) {
      return -1;
    }
  }
}
