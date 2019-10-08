import { Injectable } from '@angular/core';
import { Pelicula } from '../class/pelicula';
import { ETipoPelicula } from '../enum/etipo-pelicula.enum';
import { IPelicula } from '../interface/ipelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  private listPelicula = Array<IPelicula>();

  constructor() {
    this.listPelicula = new Array<Pelicula>();
    // tslint:disable-next-line: max-line-length
    this.listPelicula.push(
      new Pelicula(
        1,
        'Joker',
        ETipoPelicula.OTROS,
        '04-10-2019',
        100000,
        'https://image.tmdb.org/t/p/w600_and_h900_bestv2/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg'
      )
    );
    this.listPelicula.push(
      new Pelicula(
        2,
        'Psycho',
        ETipoPelicula.TERROR,
        '16-06-1960',
        50000000,
        'https://image.tmdb.org/t/p/w600_and_h900_bestv2/81d8oyEFgj7FlxJqSDXWr8JH8kV.jpg'
      )
    );
    this.listPelicula.push(
      new Pelicula(
        3,
        'Your Name.',
        ETipoPelicula.AMOR,
        '03-07-2016',
        10000,
        'https://image.tmdb.org/t/p/w600_and_h900_bestv2/xq1Ugd62d23K2knRUx6xxuALTZB.jpg'
      )
    );
  }

  public traerListado(): Array<IPelicula> {
    return this.listPelicula;
  }

  public borrarPelicula(pelicula: IPelicula) {
    const indice = this.listPelicula.indexOf(pelicula);
    this.listPelicula.splice(indice, 1);
  }
}
