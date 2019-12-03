import { Injectable } from '@angular/core';
import { ETipoPelicula } from '../enum/etipo-pelicula.enum';
import { IPelicula } from '../interface/ipelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  private peliculas = Array<IPelicula>();
  ultimoId: number;

  constructor() {
    this.ultimoId = JSON.parse(localStorage.getItem('ultimoIdPelicula'));
    if (!this.ultimoId) {
      this.ultimoId = 4;
      this.peliculas = new Array<IPelicula>();
      // tslint:disable-next-line: max-line-length
      this.peliculas.push({
        id: 1,
        nombre: 'Joker',
        tipo: ETipoPelicula.OTROS,
        fechaEstreno: '04-10-2019',
        cantPublico: 100000,
        fotoPelicula:
          'https://image.tmdb.org/t/p/w600_and_h900_bestv2/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
        estrellaPrincipal: {
          id: 1,
          nombre: 'Actor 1',
          apellido: 'Apellido 1',
          nacionalidad: 'Argentino',
          fNacimiento: '02-02-1990',
          foto: ''
        }
      });
      this.peliculas.push({
        id: 2,
        nombre: 'Psycho',
        tipo: ETipoPelicula.TERROR,
        fechaEstreno: '16-06-1960',
        cantPublico: 50000000,
        fotoPelicula:
          'https://image.tmdb.org/t/p/w600_and_h900_bestv2/81d8oyEFgj7FlxJqSDXWr8JH8kV.jpg',
        estrellaPrincipal: {
          id: 1,
          nombre: 'Actor 1',
          apellido: 'Apellido 1',
          nacionalidad: 'Argentino',
          fNacimiento: '02-02-1990',
          foto: ''
        }
      });
      this.peliculas.push({
        id: 3,
        nombre: 'Your Name.',
        tipo: ETipoPelicula.AMOR,
        fechaEstreno: '03-07-2016',
        cantPublico: 10000,
        fotoPelicula:
          'https://image.tmdb.org/t/p/w600_and_h900_bestv2/xq1Ugd62d23K2knRUx6xxuALTZB.jpg',
        estrellaPrincipal: {
          id: 1,
          nombre: 'Actor 1',
          apellido: 'Apellido 1',
          nacionalidad: 'Argentino',
          fNacimiento: '02-02-1990',
          foto: ''
        }
      });
      localStorage.setItem('peliculas', JSON.stringify(this.peliculas));
      localStorage.setItem('ultimoIdPelicula', JSON.stringify(this.ultimoId));
    } else {
      this.peliculas = JSON.parse(localStorage.getItem('peliculas'));
      this.ultimoId = JSON.parse(localStorage.getItem('ultimoIdPelicula'));
    }
  }

  public traerListado(): Array<IPelicula> {
    return this.peliculas;
  }

  public borrarPelicula(pelicula: IPelicula) {
    const indice = this.peliculas.indexOf(pelicula);
    this.peliculas.splice(indice, 1);
    localStorage.setItem('peliculas', JSON.stringify(this.peliculas));
  }

  public buscarPelicula(nombre: string): IPelicula {
    let pelicula: IPelicula;
    this.peliculas.forEach(elemento => {
      if (elemento.nombre === nombre) {
        pelicula = elemento;
      }
    });

    return pelicula;
  }

  persistirPelicula(pelicula: IPelicula) {
    this.peliculas.push(pelicula);
    this.ultimoId++;
    localStorage.setItem('peliculas', JSON.stringify(this.peliculas));
    localStorage.setItem('ultimoIdPelicula', JSON.stringify(this.ultimoId));
  }

  traerUltimoId(): number {
    return this.ultimoId;
  }
}
