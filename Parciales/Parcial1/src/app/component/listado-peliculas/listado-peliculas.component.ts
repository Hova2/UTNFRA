import { Component, OnInit } from '@angular/core';
import { ETipoPelicula } from 'src/app/enum/etipo-pelicula.enum';
import { IPelicula } from 'src/app/interface/ipelicula';
import { PeliculaService } from 'src/app/service/pelicula.service';


@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit {

  public listadoPeliculas = this.traerListado();
  public enumTipo = ETipoPelicula;


  constructor(private peliculaSrv: PeliculaService) {

  }

  ngOnInit() {
  }

  public traerListado(): Array<IPelicula> {
    return this.peliculaSrv.traerListado();
  }

}
