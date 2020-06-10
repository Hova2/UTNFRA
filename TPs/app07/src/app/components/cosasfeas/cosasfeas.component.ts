import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-cosasfeas',
  templateUrl: './cosasfeas.component.html',
  styleUrls: ['./cosasfeas.component.scss'],
})
export class CosasfeasComponent implements OnInit {
  opcionesDeLaCamara: CameraOptions = {
    quality: 30,
    cameraDirection: this.camara.Direction.BACK,
    sourceType: this.camara.PictureSourceType.CAMERA,
    destinationType: this.camara.DestinationType.FILE_URI,
    encodingType: this.camara.EncodingType.JPEG,
    mediaType: this.camara.MediaType.PICTURE,
  };
  @Output() recargar = new EventEmitter<boolean>();

  constructor(private camara: Camera, private file: File) {}

  ngOnInit() {}

  public sacarFoto() {
    this.camara.getPicture(this.opcionesDeLaCamara).then((urlImagen) => {
      this.file
        .moveFile(
          this.file.externalCacheDirectory,
          urlImagen.split('/').pop(),
          this.file.externalCacheDirectory,
          'fea-' + urlImagen.split('/').pop()
        )
        .finally(() => {
          this.recargar.emit(true);
        });
    });
  }
}
