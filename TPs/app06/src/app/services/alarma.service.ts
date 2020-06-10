import { Injectable } from '@angular/core';

import {
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentReference,
} from '@angular/fire/firestore';

import { map } from 'rxjs/internal/operators/map';
import { Observable } from 'rxjs/internal/Observable';
import { AlarmaI } from '../interfaces/alarma-i';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AlarmaService {
  public alarmas: AngularFirestoreCollection;

  constructor(private af: AngularFirestore, private as: AuthService) {
    this.alarmas = this.af.collection<AlarmaI>('app06alarmas');
  }

  public agregarAlarma(alarma: AlarmaI): Promise<DocumentReference> {
    return this.alarmas.add(alarma);
  }

  public actualizarAlarma(id: string, alarma: AlarmaI): Promise<void> {
    return this.alarmas.doc(id).update(alarma);
  }

  public borrarAlarma(id: string): Promise<void> {
    return this.alarmas.doc(id).delete()
  }

  public listarAlarmas(usuario: string): Observable<any[]> {
    return this.af
      .collection<AlarmaI>('app06alarmas')
      .snapshotChanges()
      .pipe(
        map((arreglo) => {
          const salida: any[] = new Array<any>();
          arreglo.forEach((elemento) => {
            if (usuario === elemento.payload.doc.data().usuario)
              salida.push({
                id: elemento.payload.doc.id,
                alarma: elemento.payload.doc.data(),
              });
          });
          return salida;
        })
      );
  }
}
