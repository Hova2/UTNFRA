import { Rol } from '../enums/rol.enum';

export interface UsuarioI {
  nombre: string;
  apellido: string;
  foto: string;
  activo: boolean;
  rol: Rol;
}
