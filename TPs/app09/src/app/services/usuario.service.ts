import { Injectable } from '@angular/core';

import { AngularFirestoreCollection } from '@angular/fire/firestore/collection/collection';
import { AngularFirestore } from '@angular/fire/firestore';
import { UsuarioI } from '../interfaces/usuario-i';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  public usuarios: AngularFirestoreCollection;

  constructor(private af: AngularFirestore) {
    this.usuarios = this.af.collection<UsuarioI>('usuarios');
  }

  public listaDeusuarios(): Observable<string[]> {
    return this.usuarios.valueChanges().pipe(
      map((arreglo) => {
        const salida: Array<string> = new Array<string>();
        arreglo.forEach((usuario) => {
          salida.push(usuario.correo.split('@', 1).toString());
        });
        return salida;
      })
    );
  }
}
