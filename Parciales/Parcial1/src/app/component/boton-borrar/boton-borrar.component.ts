import { Component, Input, OnInit } from '@angular/core';
import { IPelicula } from 'src/app/interface/ipelicula';
import { PeliculaService } from 'src/app/service/pelicula.service';

@Component({
  selector: 'app-boton-borrar',
  templateUrl: './boton-borrar.component.html',
  styleUrls: ['./boton-borrar.component.css']
})
export class BotonBorrarComponent implements OnInit {

  @Input() pelicula: IPelicula;

  constructor(private peliculaSrv: PeliculaService) { }

  ngOnInit() {
  }

  public borrarPelicula(){
    this.peliculaSrv.borrarPelicula(this.pelicula);
  }

}
