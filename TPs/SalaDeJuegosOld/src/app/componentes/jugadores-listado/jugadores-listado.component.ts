import { Component, OnInit } from '@angular/core';
import { Jugador } from 'src/app/clases/jugador';
import { JugadoresService } from '../../servicios/jugadores.service';
@Component({
  selector: 'app-jugadores-listado',
  templateUrl: './jugadores-listado.component.html',
  styleUrls: ['./jugadores-listado.component.css']
})
export class JugadoresListadoComponent implements OnInit {
  public listadoJugadores: Array<Jugador>;

  constructor(private jugServ: JugadoresService) {}

  ngOnInit() {}

  public traerTodos(): Array<Jugador> {
    this.listadoJugadores = this.jugServ.traerJugadoresTodos('todos');
    return this.listadoJugadores;
  }

  public traerGanadores(): Array<Jugador> {
    this.listadoJugadores = this.jugServ.traerJugadoresTodos('ganadores');
    return this.listadoJugadores;
  }

  public traerPerdedores(): Array<Jugador> {
    this.listadoJugadores = this.jugServ.traerJugadoresTodos('perdedores');
    return this.listadoJugadores;
  }
}
