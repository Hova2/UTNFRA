import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {
  AngularFireStorage,
  AngularFireUploadTask,
} from '@angular/fire/storage';
import { File } from '@ionic-native/file/ngx';

@Injectable({
  providedIn: 'root',
})
export class ArchivoService {
  public imagenesCosasLindas: Array<Promise<any>>;

  constructor(
    private af: AngularFirestore,
    private afs: AngularFireStorage,
    private file: File
  ) {}

  // public subirFotoCamara(rutaArchivo: string) {
  //   this.afs.upload(nombreArchivo, archivo);
  // }

  public agregarFotoCamara(rutaArchivo: string) {
    this.imagenesCosasLindas.push(this.convertirArchivoABlob(rutaArchivo));
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
            });
          });
          resolve(listaURL);
        })
        .catch((e) => reject(e));
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

  public convertirArchivoABlob(rutaImagen: string): Promise<any> {
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

          resolve({
            nombreDelArchivo,
            imgBlob,
          });
        })
        .catch((e) => reject(e));
    });
  }
}

// this.convertirArchivoABlob(imagen).then((respuesta) => {
//   this.as
//     .subir(respuesta.nombreDelArchivo, respuesta.imgBlob)
//     .then(() => {
//       this.cs.estaCargando(true);
//     })
//     .catch((error) => {
//       console.log(error);
//     })
//     .finally(() => {
//       timer(2000).subscribe(() => {
//         this.cs.estaCargando(false);
//       });
//     });
// });
