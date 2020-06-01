import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentReference,
} from '@angular/fire/firestore';
import { MensajeI } from '../interfaces/mensaje-i';
import { Observable } from 'rxjs';
import { CargandoService } from './cargando.service';

@Injectable({
  providedIn: 'root',
})
export class MensajeService {
  constructor(private af: AngularFirestore) {}

  public listarMensajes(sala: string, cant: number): Observable<MensajeI[]> {
    return this.af
      .collection<MensajeI>('app05mensajes', (ref) =>
        ref.where('sala', '==', sala).orderBy('fechaHora', 'desc').limit(cant)
      )
      .valueChanges();
  }

  public agregarMensaje(mensaje: MensajeI): Promise<DocumentReference> {
    return this.af.collection<MensajeI>('app05mensajes').add(mensaje);
  }
}
