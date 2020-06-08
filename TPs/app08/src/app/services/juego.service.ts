import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentReference,
} from '@angular/fire/firestore';
import { JuegoI } from '../interfaces/juego-i';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class JuegoService {
  private imagen: string;
  public juegos: AngularFirestoreCollection;

  constructor(private af: AngularFirestore) {
    this.juegos = this.af.collection<JuegoI>('app08juegos');
  }

  public seleccionarImagen(imagen: string) {
    this.imagen = imagen;
  }

  public traerImagen(): string {
    return this.imagen;
  }

  public agregarJuego(juego: JuegoI): Promise<DocumentReference> {
    return this.juegos.add(juego);
  }

  public listarJuegos(): Observable<JuegoI[]> {
    return this.af
      .collection<JuegoI>('app08juegos', (ref) =>
        ref.orderBy('puntos', 'desc').limit(3)
      )
      .valueChanges();
  }
}
