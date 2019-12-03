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
      this.ultimoId = 1;
      this.actores = new Array<ActorI>();
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
}
