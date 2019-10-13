import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { PeliculaService } from 'src/app/service/pelicula.service';
import { IPelicula } from 'src/app/interface/ipelicula';

@Component({
  selector: 'app-buscar-pelicula',
  templateUrl: './buscar-pelicula.component.html',
  styleUrls: ['./buscar-pelicula.component.css']
})
export class BuscarPeliculaComponent implements OnInit {

  @Output() busqueUnaPelicula: EventEmitter<IPelicula>;
  public nombrePelicula: string;

  constructor(private peliculaSrv: PeliculaService) {
    this.busqueUnaPelicula = new EventEmitter<any>();
    this.nombrePelicula = '';
  }

  ngOnInit() {
  }

  public buscarPelicula(){
    const pelicula = this.peliculaSrv.buscarPelicula(this.nombrePelicula);
    this.busqueUnaPelicula.emit(pelicula);
  }

}
