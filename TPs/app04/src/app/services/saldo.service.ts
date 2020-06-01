import { Injectable } from '@angular/core';
import { SaldoI } from '../interfaces/saldo-i';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { User } from 'firebase';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SaldoService {
  private saldos: AngularFirestoreCollection;
  private usuarioActual: Observable<User>;

  constructor(private af: AngularFirestore, private as: AuthService) {
    //this.saldos = this.af.collection<SaldoI>('app04saldos', (ref) =>
    // ref.orderBy('fechaYHora', 'desc')
    //);
    this.saldos = this.af.collection<SaldoI>('app04saldos');
    this.usuarioActual = this.as.traerUsuarioActual();
  }

  public cargarSaldoUsuario(saldo: SaldoI) {
    this.af.collection<SaldoI>('app04saldos').add(saldo);
  }

  public actualizarSaldoUsuario(id: string, saldo: SaldoI) {
    this.af.collection<SaldoI>('app04saldos').doc(id).update(saldo);
  }

  public borrarSaldoUsuario(id: string) {
    this.af.collection<SaldoI>('app04saldos').doc(id).delete();
  }

  public traerSaldoUsuario(usuario: string): Observable<any> {
    return this.saldos.snapshotChanges().pipe(
      map((arreglo) => {
        let salida: any = null;
        arreglo.forEach((elemento) => {
          if (elemento.payload.doc.data().usuario === usuario) {
            salida = {
              id: elemento.payload.doc.id,
              saldo: elemento.payload.doc.data(),
            };
          }
        });
        return salida;
      })
    );
  }
}
