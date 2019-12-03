import { Injectable } from '@angular/core';
import { ActorI } from '../interface/actor-i';

@Injectable({
  providedIn: 'root'
})
export class ActorService {
  ultimoId: number;
  actores: Array<ActorI>;

  constructor() {
    this.ultimoId = JSON.parse(localStorage.getItem('ultimoIdActor'));
    if (!this.ultimoId) {
      this.ultimoId = 2;
      this.actores = new Array<ActorI>();
      this.actores.push({
        id: 1,
        nombre: 'Actor 1',
        apellido: 'Apellido 1',
        nacionalidad: 'Argentino',
        fNacimiento: '02-02-1990',
        foto: ''
      });
      localStorage.setItem('actores', JSON.stringify(this.actores));
      localStorage.setItem('ultimoIdActor', JSON.stringify(this.ultimoId));
    } else {
      this.actores = JSON.parse(localStorage.getItem('actores'));
      this.ultimoId = JSON.parse(localStorage.getItem('ultimoIdActor'));
    }
  }

  persistirActor(actor: ActorI) {
    this.actores.push(actor);
    this.ultimoId++;
    localStorage.setItem('actores', JSON.stringify(this.actores));
    localStorage.setItem('ultimoIdActor', JSON.stringify(this.ultimoId));
  }

  traerUltimoId(): number {
    return this.ultimoId;
  }

  traerActores(): Array<ActorI> {
    return this.actores;
  }

  public modificarActor(actor: ActorI) {
    const indice = this.actores.indexOf(actor);
    this.actores.splice(indice, 1);
    this.actores.push(actor);
    localStorage.setItem('actores', JSON.stringify(this.actores));
  }
}
