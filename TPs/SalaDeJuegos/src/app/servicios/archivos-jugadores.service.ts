import { Injectable } from '@angular/core';
import { Jugador } from '../clases/jugador';

@Injectable({
  providedIn: 'root'
})
export class ArchivosJugadoresService {
  private listaJugadores: Array<Jugador>;

  constructor() {
    this.listaJugadores = new Array<Jugador>();
  }

  public altaJugador(jugador: Jugador) {
    this.listaJugadores.push(jugador);
  }

  public traerJugadoresTodos(): Array<Jugador> {
    return this.listaJugadores;
  }
}
