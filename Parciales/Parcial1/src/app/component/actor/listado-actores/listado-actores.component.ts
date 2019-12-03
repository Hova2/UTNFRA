import { Component, OnInit } from '@angular/core';
import { ActorI } from 'src/app/interface/actor-i';
import { ActorService } from 'src/app/service/actor.service';
import { MiServicioPrincipalService } from 'src/app/service/mi-servicio-principal.service';

@Component({
  selector: 'app-listado-actores',
  templateUrl: './listado-actores.component.html',
  styleUrls: ['./listado-actores.component.css']
})
export class ListadoActoresComponent implements OnInit {
  private listadoActores: Array<ActorI>;

  constructor(
    private as: ActorService,
    private msps: MiServicioPrincipalService
  ) {
    this.listadoActores = this.as.traerActores();
  }

  mostrarDetalle(actor: ActorI) {
    this.msps.asignarActor(actor);
  }

  modificarActor(evento: ActorI){
    this.as.modificarActor(evento);
  }

  ngOnInit() {}
}
