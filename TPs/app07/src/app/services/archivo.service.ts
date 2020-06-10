import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { File } from '@ionic-native/file/ngx';
import { App01FotosI } from '../interfaces/app01fotos-i';
import { AuthService } from './auth.service';



@Injectable({
  providedIn: 'root',
})
export class ArchivoService {
  app01Fotos: AngularFirestoreCollection;

  constructor(
    private af: AngularFirestore,
    private afs: AngularFireStorage,
    private file: File,
    private as: AuthService
  ) {
    this.app01Fotos = this.af.collection<App01FotosI>('app01fotos');
  }

  public subirFotos() {
    this.listarDirectorio().then((elemento) => {
      elemento.forEach((foto) => {
        this.convertirArchivoABlob(foto.urlNativa).then((archivo) => {
          this.afs.upload('app01/' + foto.nombre, archivo).then((info) => {
            info.ref.getDownloadURL().then((url) => {
              this.as.traerUsuarioActual().subscribe((usuario) => {
                let esLinda = false;
                if (foto.nombreMostrar === 'LINDA') {
                  esLinda = true;
                }
                const nuevaFoto: App01FotosI = {
                  usuario: usuario.email,
                  urlFoto: url,
                  esLinda: esLinda,
                  fechaYHora: info.metadata.timeCreated,
                  usuariosVotaron: [usuario.email],
                };
                this.app01Fotos.add(nuevaFoto);
              });
            });
          });
        });
      });
    });
  }

  public listarDirectorio(): Promise<any> {
    return new Promise((resolve, reject) => {
      const listaURL = new Array<any>();
      this.file
        .listDir(this.file.externalCacheDirectory, '')
        .then((arregloURLs) => {
          arregloURLs.forEach((elemento) => {
            listaURL.push({
              url: (<any>window).Ionic.WebView.convertFileSrc(
                elemento.nativeURL
              ),
              nombre: elemento.name,
              nombreMostrar: elemento.name
                .split('-', 1)
                .toString()
                .toUpperCase(),
              urlNativa: elemento.nativeURL,
            });
          });
          resolve(listaURL);
        })
        .catch((e) => reject(e));
    });
  }

  public borrarFoto(nombreFoto: string): Promise<any> {
    return this.file.removeFile(this.file.externalCacheDirectory, nombreFoto);
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
}
