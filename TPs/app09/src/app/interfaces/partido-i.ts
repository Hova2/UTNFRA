export interface PartidoI {
  jugador1: string;
  jugador2: string;
  fecha: Date;
  terminado: boolean;
  urlFoto: string;
  urlVideo: string;
  golesJug1?: number;
  golesJug2?: number;
}
