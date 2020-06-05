import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ArchivoService } from 'src/app/services/archivo.service';

@Component({
  selector: 'app-cargar-foto',
  templateUrl: './cargar-foto.component.html',
  styleUrls: ['./cargar-foto.component.scss'],
})
export class CargarFotoComponent implements OnInit {
  public opcionesDeLaCamara: CameraOptions = {
    quality: 30,
    cameraDirection: this.camara.Direction.BACK,
    sourceType: this.camara.PictureSourceType.CAMERA,
    destinationType: this.camara.DestinationType.FILE_URI,
    encodingType: this.camara.EncodingType.JPEG,
    mediaType: this.camara.MediaType.PICTURE,
  };

  @ViewChild('divsubir') divsubir: any;

  public elemento: any;
  public imagen: string;
  public urlNativa: string;

  constructor(
    private mc: ModalController,
    private np: NavParams,
    private as: ArchivoService,
    private camara: Camera
  ) {
    this.elemento = this.np.get('elemento');
    this.imagen = null;
  }

  ngOnInit() {}

  public sacarFoto() {
    this.camara
      .getPicture(this.opcionesDeLaCamara)
      .then((urlNativaFoto) => {
        this.urlNativa = urlNativaFoto;
        this.imagen = (<any>window).Ionic.WebView.convertFileSrc(urlNativaFoto);
      })
      .then(() => {
        this.divsubir.nativeElement.className = '';
      });
  }

  public subirFoto() {
    this.as.subirFoto(this.urlNativa, this.elemento);
    this.salir();
  }

  public salir() {
    this.mc.dismiss();
  }
}
