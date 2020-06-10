import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { File } from '@ionic-native/file/ngx';
import { AlarmaService } from './alarma.service';
import { AlarmaI } from '../interfaces/alarma-i';
import {
  AngularFirestoreCollection,
  AngularFirestore,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class ArchivoService {
  public alarmas: AngularFirestoreCollection;

  constructor(
    private afs: AngularFireStorage,
    private file: File,
    private af: AngularFirestore,
    private as: AlarmaService
  ) {
    this.alarmas = this.af.collection<AlarmaI>('app06alarmas');
  }

  public subirAudio(urlNativa: string, elemento: any) {
    this.convertirArchivoAudioABlob(urlNativa).then((archivo) => {
      this.afs
        .upload('app06/audios/' + urlNativa.split('/').pop(), archivo)
        .then((info) => {
          info.ref.getDownloadURL().then((url) => {
            let alarmaTmp: AlarmaI;
            alarmaTmp = {
              usuario: elemento.alarma.usuario,
              distancia: elemento.alarma.distancia,
              latitud: elemento.alarma.latitud,
              longitud: elemento.alarma.longitud,
              direccion: elemento.alarma.direccion,
              urlAudio: url,
            };
            this.as.actualizarAlarma(elemento.id, alarmaTmp);
          });
        });
    });
  }

  private convertirArchivoAudioABlob(rutaImagen: string): Promise<any> {
    return new Promise((resolve, reject) => {
      let nombreDelArchivo = '';
      this.file
        .resolveLocalFilesystemUrl(rutaImagen)
        .then((entradaDeArchivo) => {
          let { name, nativeURL } = entradaDeArchivo;
          let ruta = nativeURL.substring(0, nativeURL.lastIndexOf('/'));
          nombreDelArchivo = name;
          return this.file.readAsArrayBuffer(ruta, nombreDelArchivo);
        })
        .then((buffer) => {
          let imgBlob = new Blob([buffer], {
            type: 'audio/mpeg',
          });

          resolve(imgBlob);
        })
        .catch((e) => reject(e));
    });
  }
}
