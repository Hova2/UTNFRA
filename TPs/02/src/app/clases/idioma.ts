import { IIdioma } from './interfaces/iidioma';
import { ITema } from './interfaces/itema';

export class Idioma implements IIdioma {
  nombre: string;
  tema: ITema;

  constructor(nombre: string, tema: ITema) {
    this.nombre = nombre;
    this.tema = tema;
  }
}
