import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-cosaslindas',
  templateUrl: './cosaslindas.component.html',
  styleUrls: ['./cosaslindas.component.scss'],
})
export class CosaslindasComponent implements OnInit {
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
          'linda-' + urlImagen.split('/').pop()
        )
        .finally(() => {
          this.recargar.emit(true);
        });
    });
  }
}
