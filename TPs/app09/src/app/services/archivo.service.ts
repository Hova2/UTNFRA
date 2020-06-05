import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { File } from '@ionic-native/file/ngx';
import { AuthService } from './auth.service';
import { PartidoService } from './partido.service';
import { PartidoI } from '../interfaces/partido-i';

@Injectable({
  providedIn: 'root',
})
export class ArchivoService {
  app01Fotos: AngularFirestoreCollection;

  constructor(
    private afs: AngularFireStorage,
    private file: File,
    private ps: PartidoService
  ) {}

  public subirFoto(urlNativa: string, elemento: any) {
    this.convertirArchivoABlob(urlNativa).then((archivo) => {
      this.afs
        .upload('app09/fotos/' + urlNativa.split('/').pop(), archivo)
        .then((info) => {
          info.ref.getDownloadURL().then((url) => {
            let partidoTmp: PartidoI;
            if (elemento.partido.golesJug1) {
              partidoTmp = {
                jugador1: elemento.partido.jugador1,
                jugador2: elemento.partido.jugador2,
                fecha: elemento.partido.fecha,
                terminado: elemento.partido.terminado,
                urlFoto: url,
                urlVideo: elemento.partido.urlVideo,
                golesJug1: elemento.partido.golesJug1,
                golesJug2: elemento.partido.golesJug2,
              };
            } else {
              partidoTmp = {
                jugador1: elemento.partido.jugador1,
                jugador2: elemento.partido.jugador2,
                fecha: elemento.partido.fecha,
                terminado: elemento.partido.terminado,
                urlFoto: url,
                urlVideo: elemento.partido.urlVideo,
              };
            }
            this.ps.actualizarPartido(elemento.id, partidoTmp);
          });
        });
    });
  }

  public subirVideo(urlNativa: string, elemento: any) {
    this.convertirArchivoVideoABlob(urlNativa).then((archivo) => {
      this.afs
        .upload('app09/videos/' + urlNativa.split('/').pop(), archivo)
        .then((info) => {
          info.ref.getDownloadURL().then((url) => {
            let partidoTmp: PartidoI;
            if (elemento.partido.golesJug1) {
              partidoTmp = {
                jugador1: elemento.partido.jugador1,
                jugador2: elemento.partido.jugador2,
                fecha: elemento.partido.fecha,
                terminado: elemento.partido.terminado,
                urlFoto: elemento.partido.urlFoto,
                urlVideo: url,
                golesJug1: elemento.partido.golesJug1,
                golesJug2: elemento.partido.golesJug2,
              };
            } else {
              partidoTmp = {
                jugador1: elemento.partido.jugador1,
                jugador2: elemento.partido.jugador2,
                fecha: elemento.partido.fecha,
                terminado: elemento.partido.terminado,
                urlFoto: elemento.partido.urlFoto,
                urlVideo: url,
              };
            }
            this.ps.actualizarPartido(elemento.id, partidoTmp);
          });
        });
    });
  }

  public borrarArchivos(): Promise<any> {
    return this.file
      .listDir(this.file.externalCacheDirectory, '')
      .then((arregloURLs) => {
        arregloURLs.forEach((elemento) => {
          this.file.removeFile(this.file.externalCacheDirectory, elemento.name);
        });
      });
  }

  private convertirArchivoABlob(rutaImagen: string): Promise<any> {
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
            type: 'image/jpeg',
          });

          resolve(imgBlob);
        })
        .catch((e) => reject(e));
    });
  }

  private convertirArchivoVideoABlob(rutaImagen: string): Promise<any> {
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
            type: 'video/mp4',
          });

          resolve(imgBlob);
        })
        .catch((e) => reject(e));
    });
  }
}
