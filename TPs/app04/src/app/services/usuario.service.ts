import { Injectable } from '@angular/core';

import { AngularFirestoreCollection } from '@angular/fire/firestore/collection/collection';
import { AngularFirestore } from '@angular/fire/firestore';
import { UsuarioI } from '../interfaces/usuario-i';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  public usuarios: AngularFirestoreCollection;

  constructor(private af: AngularFirestore) {
    this.usuarios = this.af.collection<UsuarioI>('usuarios');
  }

}
