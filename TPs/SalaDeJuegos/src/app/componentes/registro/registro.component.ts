import { Component, OnInit } from '@angular/core';
import { Jugador } from 'src/app/clases/jugador';
import { Sexo } from 'src/app/enums/sexo.enum';
import { JugadoresService } from 'src/app/servicios/jugadores.service';
//para poder hacer las validaciones
//import { Validators, FormBuilder, FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  public jugador: Jugador;
  public email: string;
  public cuit: string;
  public clave: string;
  public sexo: Sexo;


  constructor(private jugServ: JugadoresService) {}

  ngOnInit() {}

  public altaJugador(){
    this.jugador = new Jugador(this.email, this.cuit, this.sexo, false, this.clave);
    this.jugServ.altaJugador(this.jugador);
  }


}
