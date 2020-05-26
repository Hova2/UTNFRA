import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ArchivoService } from 'src/app/services/archivo.service';

@Component({
  selector: 'app-cosaslindas',
  templateUrl: './cosaslindas.component.html',
  styleUrls: ['./cosaslindas.component.scss'],
})
export class CosaslindasComponent implements OnInit {
  opcionesDeLaCamara: CameraOptions = {
    quality: 50,
    cameraDirection: this.camara.Direction.BACK,
    sourceType: this.camara.PictureSourceType.CAMERA,
    destinationType: this.camara.DestinationType.FILE_URI,
    encodingType: this.camara.EncodingType.JPEG,
    mediaType: this.camara.MediaType.PICTURE,
  };
  @Output() recargar = new EventEmitter<boolean>();

  constructor(private camara: Camera, private as: ArchivoService) {}

  ngOnInit() {}

  public sacarFoto() {
    this.camara.getPicture(this.opcionesDeLaCamara).finally(()=>{
      this.recargar.emit(true);
    });
  }
}
