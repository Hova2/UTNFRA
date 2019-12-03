import { ETipoPelicula } from '../enum/etipo-pelicula.enum';
import { ActorI } from './actor-i';

export interface IPelicula {
  id: number;
  nombre: string;
  tipo: ETipoPelicula;
  fechaEstreno: string;
  cantPublico: number;
  fotoPelicula: string;
  estrellaPrincipal: ActorI;
}
