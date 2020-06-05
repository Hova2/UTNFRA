import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

import { ArchivoService } from 'src/app/services/archivo.service';
import {
  MediaCapture,
  CaptureVideoOptions,
} from '@ionic-native/media-capture/ngx';
import { VideoPlayer } from '@ionic-native/video-player/ngx';

@Component({
  selector: 'app-cargar-video',
  templateUrl: './cargar-video.component.html',
  styleUrls: ['./cargar-video.component.scss'],
})
export class CargarVideoComponent implements OnInit {
  @ViewChild('divsubir') divsubir: any;

  public opcionesVideo: CaptureVideoOptions;

  public elemento: any;
  public video: string;
  public urlNativa: string;

  constructor(
    private mc: ModalController,
    private np: NavParams,
    private as: ArchivoService,
    private mec: MediaCapture,
    private vp: VideoPlayer
  ) {
    this.elemento = this.np.get('elemento');
    this.video = null;
    this.opcionesVideo = { limit: 1, quality: 0 };
  }

  ngOnInit() {}

  public sacarVideo() {
    this.mec
      .captureVideo(this.opcionesVideo)
      .then((mediaf) => {
        console.log();
        this.urlNativa = mediaf[0].fullPath;
        this.video = (<any>window).Ionic.WebView.convertFileSrc(
          mediaf[0].fullPath
        );
      })
      .then(() => {
        this.divsubir.nativeElement.className = '';
      });
  }

  public verVideo() {
    this.vp
      .play(this.urlNativa)
      .then(() => {
        console.log('video completo');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  public subirVideo() {
    this.as.subirVideo(this.urlNativa, this.elemento);
    this.salir();
  }

  public salir() {
    this.mc.dismiss();
  }
}
