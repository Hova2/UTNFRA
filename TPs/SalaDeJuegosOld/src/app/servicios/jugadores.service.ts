import { Injectable } from '@angular/core';
import { Jugador } from '../clases/jugador';
import { ArchivosJugadoresService } from './archivos-jugadores.service';
@Injectable({
  providedIn: 'root'
})
export class JugadoresService {
  constructor(private archJug: ArchivosJugadoresService) {}

  public altaJugador(jugador: Jugador) {
    this.archJug.altaJugador(jugador);
  }

  public traerJugadoresTodos(filtro: string): Array<Jugador>{
    const listaJugadores = this.archJug.traerJugadoresTodos();
    const listaResultado = listaJugadores.filter(item =>{
      switch (filtro) {
        case 'todos':
          return item;
          break;
        case 'ganadores':
          if (item.gano) {
            return item;
          }
          break;
        default:
          if (!item.gano) {
            return item;
          }
          break;
      }
    });
    return listaResultado;
  }
}
