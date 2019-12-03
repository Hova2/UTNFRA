import { Injectable } from "@angular/core";
import { Pelicula } from "../class/pelicula";
import { ETipoPelicula } from "../enum/etipo-pelicula.enum";
import { IPelicula } from "../interface/ipelicula";

@Injectable({
  providedIn: "root"
})
export class PeliculaService {
  private listPelicula = Array<IPelicula>();
  ultimoId: number;

  constructor() {
    this.listPelicula = new Array<IPelicula>();
    // tslint:disable-next-line: max-line-length
    this.listPelicula.push({
      id: 1,
      nombre: "Joker",
      tipo: ETipoPelicula.OTROS,
      fechaEstreno: "04-10-2019",
      cantPublico: 100000,
      fotoPelicula:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
    });
    this.listPelicula.push({
      id: 2,
      nombre: "Psycho",
      tipo: ETipoPelicula.TERROR,
      fechaEstreno: "16-06-1960",
      cantPublico: 50000000,
      fotoPelicula:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/81d8oyEFgj7FlxJqSDXWr8JH8kV.jpg"
    });
    this.listPelicula.push({
      id: 3,
      nombre: "Your Name.",
      tipo: ETipoPelicula.AMOR,
      fechaEstreno: "03-07-2016",
      cantPublico: 10000,
      fotoPelicula:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/xq1Ugd62d23K2knRUx6xxuALTZB.jpg"
    });
    this.ultimoId = 4;
  }

  public traerListado(): Array<IPelicula> {
    return this.listPelicula;
  }

  public borrarPelicula(pelicula: IPelicula) {
    const indice = this.listPelicula.indexOf(pelicula);
    this.listPelicula.splice(indice, 1);
  }

  public buscarPelicula(nombre: string): IPelicula {
    let pelicula: IPelicula;
    this.listPelicula.forEach(elemento => {
      if (elemento.nombre === nombre) {
        pelicula = elemento;
      }
    });

    return pelicula;
  }

  persistirPelicula(pelicula: IPelicula) {
    this.listPelicula.push(pelicula);
    this.ultimoId++;
  }

  traerUltimoId(): number{
    return this.ultimoId;
  }
}
