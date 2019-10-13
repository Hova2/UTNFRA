import { ETipoPelicula } from '../enum/etipo-pelicula.enum';

export interface IPelicula {
  id: number;
  nombre: string;
  tipo: ETipoPelicula;
  fechaEstreno: string;
  cantPublico: number;
  fotoPelicula: string;
}
