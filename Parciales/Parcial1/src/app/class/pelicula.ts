import { ETipoPelicula } from '../enum/etipo-pelicula.enum';
import { IPelicula } from '../interface/ipelicula';

export class Pelicula implements IPelicula {
  id: number;
  nombre: string;
  tipo: ETipoPelicula;
  fechaEstreno: string;
  cantPublico: number;
  fotoPelicula: string;

  constructor(
    id: number,
    nombre: string,
    tipo: ETipoPelicula,
    fechaEstreno: string,
    cantPublico: number,
    fotoPelicula: string
  ) {
    this.id = id;
    this.nombre = nombre;
    this.tipo = tipo;
    this.fechaEstreno = fechaEstreno;
    this.cantPublico = cantPublico;
    this.fotoPelicula = fotoPelicula;
  }
}
