import { Component, OnInit } from '@angular/core';
import { MiServicioPrincipalService } from 'src/app/service/mi-servicio-principal.service';
import { IPelicula } from 'src/app/interface/ipelicula';
import { ETipoPelicula } from 'src/app/enum/etipo-pelicula.enum';


@Component({
  selector: 'app-actor-detalle',
  templateUrl: './actor-detalle.component.html',
  styleUrls: ['./actor-detalle.component.css']
})
export class ActorDetalleComponent implements OnInit {
  private listadoPeliculas: Array<IPelicula>;
  public enumTipo = ETipoPelicula;


  constructor(private msps: MiServicioPrincipalService) {
    this.listadoPeliculas = this.msps.traerPeliculasActorSeleccionado();
  }

  ngOnInit() {
  }

}
