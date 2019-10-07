import { Injectable } from '@angular/core';
import { Juego } from '../clases/juego';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {
  private listaJuegos: Array<Juego>;

  constructor() {
    this.listaJuegos = new Array<Juego>();
  }

  public altaJuego(juego: Juego) {
    this.listaJuegos.push(juego);
  }

  public traerJuegosTodos(): Array<Juego> {
    return this.listaJuegos;
  }
}
