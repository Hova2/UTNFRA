import { ITema } from './interfaces/itema';

export class Tema implements ITema{
    colores: Array<string>;
    numeros: Array<string>;
    animales: Array<string>;

    constructor(colores: Array<string>, numeros: Array<string>, animales: Array<string>){
        this.colores = colores;
        this.numeros = numeros;
        this.animales = animales;
    }
}
