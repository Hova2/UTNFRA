import { ProductoI } from './producto-i';

export interface LocalI {
  nombre: string;
  direccion: string;
  productos?: Array<ProductoI>;
  activo: boolean;
}
