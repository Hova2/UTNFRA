import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentReference,
} from '@angular/fire/firestore';
import { PartidoI } from '../interfaces/partido-i';
import { map } from 'rxjs/internal/operators/map';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class PartidoService {
  public partidos: AngularFirestoreCollection;

  constructor(private af: AngularFirestore) {
    this.partidos = this.af.collection<PartidoI>('app09partidos');
  }

  public agregarPartido(partido: PartidoI): Promise<DocumentReference> {
    return this.partidos.add(partido);
  }

  public actualizarPartido(id: string, partido: PartidoI): Promise<void> {
    return this.partidos.doc(id).update(partido);
  }

  public listarPartidos(cant: number): Observable<any[]> {
    return this.af
      .collection<PartidoI>('app09partidos', (ref) =>
        ref.orderBy('fecha', 'desc').limit(cant)
      )
      .snapshotChanges()
      .pipe(
        map((arreglo) => {
          const salida: any[] = new Array<any>();
          arreglo.forEach((elemento) => {
            salida.push({
              id: elemento.payload.doc.id,
              partido: elemento.payload.doc.data(),
            });
          });
          return salida;
        })
      );
  }

  public listarPartidosTerminados(cant: number): Observable<any[]> {
    return this.af
      .collection<PartidoI>('app09partidos', (ref) =>
        ref.where('terminado', '==', true).orderBy('fecha', 'desc').limit(cant)
      )
      .snapshotChanges()
      .pipe(
        map((arreglo) => {
          const salida: any[] = new Array<any>();
          arreglo.forEach((elemento) => {
            salida.push({
              id: elemento.payload.doc.id,
              partido: elemento.payload.doc.data(),
            });
          });
          return salida;
        })
      );
  }

  public traerTopCinco(): Observable<Map<string, number>> {
    return this.af
      .collection<PartidoI>('app09partidos', (ref) =>
        ref.where('terminado', '==', true)
      )
      .valueChanges()
      .pipe(
        map((partidos) => {
          const salida = new Map<string, number>();
          const tmp = new Map<string, number>();
          const tmp2 = new Map<string, number>();
          partidos.forEach((partido) => {
            if (
              parseInt(partido.golesJug1.toString()) >
              parseInt(partido.golesJug2.toString())
            ) {
              if (tmp.has(partido.jugador1)) {
                tmp.set(partido.jugador1, tmp.get(partido.jugador1) + 1);
              } else {
                tmp.set(partido.jugador1, 1);
              }
            } else {
              if (tmp.has(partido.jugador2)) {
                tmp.set(partido.jugador2, tmp.get(partido.jugador2) + 1);
              } else {
                tmp.set(partido.jugador2, 1);
              }
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
          salida.set([...tmp2.keys()][3], [...tmp2.values()][3]);
          salida.set([...tmp2.keys()][4], [...tmp2.values()][4]);

          return salida;
        })
      );
  }
}
