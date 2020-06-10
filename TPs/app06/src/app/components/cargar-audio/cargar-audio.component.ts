import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ArchivoService } from 'src/app/services/archivo.service';
import { MediaCapture, MediaFile } from '@ionic-native/media-capture/ngx';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { Observable } from 'rxjs/internal/Observable';
import { CargandoService } from 'src/app/services/cargando.service';

@Component({
  selector: 'app-cargar-audio',
  templateUrl: './cargar-audio.component.html',
  styleUrls: ['./cargar-audio.component.scss'],
})
export class CargarAudioComponent implements OnInit {
  @ViewChild('divsubir') divsubir: any;
  public elemento: any;
  public imagen: string;
  public urlNativa: string;
  public audioAlarma: MediaObject;
  public $rutaArchivo: Observable<string>;

  constructor(
    private mc: ModalController,
    private np: NavParams,
    private as: ArchivoService,
    private mec: MediaCapture,
    private media: Media,
    private cs: CargandoService
  ) {
    this.elemento = this.np.get('elemento');
    this.audioAlarma = null;
  }

  ngOnInit() {}

  public grabarAudio() {
    this.mec
      .captureAudio({ limit: 1, duration: 10 })
      .then((archivos: MediaFile[]) => {
        this.audioAlarma = this.media.create(archivos[0].fullPath);
        this.$rutaArchivo = new Observable((observer) => {
          observer.next(archivos[0].fullPath);
          observer.complete();
        });
      })
      .then(() => {
        this.divsubir.nativeElement.className = '';
      });
  }

  public reproducirAudio() {
    this.audioAlarma.play();
  }

  public subirAudio() {
    const spinner = this.cs.devolverSpinner();
    spinner.then((elemento) => {
      elemento.present();
    });
    this.$rutaArchivo.subscribe((ruta) => {
      this.as.subirAudio(ruta, this.elemento);
      setTimeout(() => {
        spinner.then((elemento) => {
          elemento.dismiss();
          this.salir();
        });
      }, 3000);
    });
  }

  public salir() {
    this.mc.dismiss();
  }
}
