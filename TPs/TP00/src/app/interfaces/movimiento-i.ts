import { TipoMoviemiento } from '../enums/tipo-moviemiento.enum';

export interface MovimientoI {
  localId?: string;
  usuarioId?: string;
  productoId?: string;
  cantidad?: number;
  tipoMovimiento: TipoMoviemiento;
}
