import { Sexo } from '../enums/sexo.enum';

export class Jugador {
  usuario: string;
  cuit: string;
  sexo: Sexo;
  gano: boolean;
  clave: string;

 constructor(usuario: string, cuit: string, sexo: Sexo, gano: boolean,  clave: string) {
    this.usuario = usuario;
    this.cuit = cuit;
    this.sexo = sexo;
    this.gano = gano;
    this.clave = clave;
  }
}
