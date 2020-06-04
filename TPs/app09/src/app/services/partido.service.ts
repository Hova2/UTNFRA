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
}
