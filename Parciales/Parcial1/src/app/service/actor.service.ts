import { Injectable } from "@angular/core";
import { ActorI } from "../interface/actor-i";

@Injectable({
  providedIn: "root"
})
export class ActorService {
  ultimoId: number;
  actores: Array<ActorI>;

  constructor() {
    this.ultimoId = 1;
    this.actores = new Array<ActorI>();
  }

  persistirActor(actor: ActorI) {
    this.actores.push(actor);
    this.ultimoId++;
    console.table(this.actores);
  }

  traerUltimoId(): number {
    return this.ultimoId;
  }

  traerActores(): Array<ActorI> {
    return this.actores;
  }
}
