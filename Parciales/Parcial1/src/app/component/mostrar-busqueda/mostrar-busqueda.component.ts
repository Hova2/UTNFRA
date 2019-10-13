import { Component, OnInit } from '@angular/core';
import { IPelicula } from 'src/app/interface/ipelicula';
import { ETipoPelicula } from 'src/app/enum/etipo-pelicula.enum';

@Component({
  selector: 'app-mostrar-busqueda',
  templateUrl: './mostrar-busqueda.component.html',
  styleUrls: ['./mostrar-busqueda.component.css']
})
export class MostrarBusquedaComponent implements OnInit {

  public seBusco: boolean;
  public pelicula: IPelicula;
  public enumTipo = ETipoPelicula;

  constructor() {
    this.seBusco = false;
  }

  ngOnInit() {
  }

  public verificarBusqueda(pelicula: IPelicula): boolean {
    if(pelicula != null){
      this.seBusco = true;
      this.pelicula = pelicula;
    }
    return this.seBusco;
  }

}
