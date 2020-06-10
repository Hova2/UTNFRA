import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { App01FotosI } from '../interfaces/app01fotos-i';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class FotoService {
  private app01Fotos: AngularFirestoreCollection;

  constructor(private af: AngularFirestore, private as: AuthService) {
    this.app01Fotos = this.af.collection<App01FotosI>('app01fotos', (ref) =>
      ref.orderBy('fechaYHora', 'desc')
    );
  }

  public listaFotosUsuario(): Observable<any[]> {
    return this.app01Fotos.snapshotChanges().pipe(
      map((arreglo) => {
        const salida = new Array<any>();
        arreglo.forEach((elemento) => {
          elemento.payload.doc.data().usuario;
          this.as.traerUsuarioActual().subscribe((usuario) => {
            if (usuario.email === elemento.payload.doc.data().usuario) {
              const tmp: any = {
                id: elemento.payload.doc.id,
                foto: JSON.parse(JSON.stringify(elemento.payload.doc.data())),
              };
              salida.push(tmp);
            }
          });
        });
        return salida;
      })
    );
  }

  public listaDeTodasLasFotos(): Observable<any[]> {
    return this.app01Fotos.snapshotChanges().pipe(
      map((arreglo) => {
        const salida = new Array<any>();
        arreglo.forEach((elemento) => {
          elemento.payload.doc.data().usuario;
          this.as.traerUsuarioActual().subscribe((usuario) => {
            if (usuario.email !== elemento.payload.doc.data().usuario) {
              let tmp: any;
              if (
                elemento.payload.doc
                  .data()
                  .usuariosVotaron.includes(usuario.email)
              ) {
                tmp = {
                  id: elemento.payload.doc.id,
                  foto: JSON.parse(JSON.stringify(elemento.payload.doc.data())),
                  noPuedeVotar: true,
                };
              } else {
                tmp = {
                  id: elemento.payload.doc.id,
                  foto: JSON.parse(JSON.stringify(elemento.payload.doc.data())),
                  noPpuedeVotar: false,
                };
              }
              salida.push(tmp);
            }
          });
        });
        return salida;
      })
    );
  }

  public actualizarFoto(id: string, foto: App01FotosI) {
    this.app01Fotos.doc(id).update(foto);
  }

  public traerTop3MasLindas() {
    return this.app01Fotos.valueChanges().pipe(
      map((arreglo) => {
        const salida = new Map<string, number>();
        const tmp = new Map<string, number>();
        const tmp2 = new Map<string, number>();
        arreglo.forEach((foto) => {
          if (foto.esLinda) {
            tmp.set(foto.urlFoto, foto.usuariosVotaron.length);
          }
        });
        for (const [clave, valor] of [...tmp.entries()].sort(
          (valor1, valor2) => valor2[1] - valor1[1]
        )) {
          tmp2.set(clave, valor);
        }
        salida.set([...tmp2.keys()][0], [...tmp2.values()][0]);
        salida.set([...tmp2.keys()][1], [...tmp2.values()][1]);
        salida.set([...tmp2.keys()][2], [...tmp2.values()][2]);
        return salida;
      })
    );
  }

  public traerTop3MasFeas() {
    return this.app01Fotos.valueChanges().pipe(
      map((arreglo) => {
        const salida = new Map<string, number>();
        const tmp = new Map<string, number>();
        const tmp2 = new Map<string, number>();
        arreglo.forEach((foto) => {
          if (!foto.esLinda) {
            tmp.set(foto.urlFoto, foto.usuariosVotaron.length);
          }
        });
        for (const [clave, valor] of [...tmp.entries()].sort(
          (valor1, valor2) => valor2[1] - valor1[1]
        )) {
          tmp2.set(clave, valor);
        }
        salida.set([...tmp2.keys()][0], [...tmp2.values()][0]);
        salida.set([...tmp2.keys()][1], [...tmp2.values()][1]);
        salida.set([...tmp2.keys()][2], [...tmp2.values()][2]);
        return salida;
      })
    );
  }
}
