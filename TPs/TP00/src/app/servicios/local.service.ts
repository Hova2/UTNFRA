import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { LocalI } from '../interfaces/local-i';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { ProductoI } from '../interfaces/producto-i';
import { UsuarioI } from '../interfaces/usuario-i';

@Injectable({
  providedIn: 'root'
})
export class LocalService {
  locales: AngularFirestoreCollection;

  constructor(private af: AngularFirestore) {
    this.locales = this.af.collection<LocalI>('locales');
  }

  persistirLocal(local: LocalI) {
    this.locales.add(local);
  }

  deshabilitarLocal(uid: string) {
    this.locales.doc(uid).update({ activo: false });
  }

  traerLocales(): Observable<any[]> {
    return this.locales.snapshotChanges().pipe(
      map(actions => {
        return actions.map(action => {
          const datos = action.payload.doc.data() as LocalI;
          const id = action.payload.doc.id;
          return { id, ...datos };
        });
      })
    );
  }

  agregarProductoLocal(
    producto: Observable<ProductoI>,
    idLocal: string,
    idProducto: string
  ) {
    producto.pipe(take(1)).subscribe(prod => {
      this.locales
        .doc<LocalI>(idLocal)
        .collection('/productos')
        .doc(idProducto)
        .set(prod);
    });
  }

  agregarUsuarioLocal(
    usuario: Observable<UsuarioI>,
    idLocal: string,
    idUsuario: string
  ) {
    usuario.pipe(take(1)).subscribe(user => {

      this.locales
        .doc<LocalI>(idLocal)
        .collection('/usuarios')
        .doc(idUsuario)
        .set(user);
    });
  }
}
