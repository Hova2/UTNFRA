import { Injectable } from '@angular/core';
import { ActorI } from '../interface/actor-i';
import { Router } from '@angular/router';
import { PeliculaService } from './pelicula.service';
import { IPelicula } from '../interface/ipelicula';
import { equal } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class MiServicioPrincipalService {
  private actorSeleccionado: ActorI;

  constructor(private route: Router, private ps: PeliculaService) {}

  asignarActor(actor: ActorI) {
    this.actorSeleccionado = actor;
    this.route.navigate(['actor/actor_detalle']);
  }

  traerPeliculasActorSeleccionado(): Array<IPelicula> {
     const salida = this.ps.traerListado().filter(pelicula => {
      if (
        JSON.stringify(pelicula.estrellaPrincipal) ===
        JSON.stringify(this.actorSeleccionado)
      ) {
        return pelicula;
      }
    });

     return salida;
  }
}
