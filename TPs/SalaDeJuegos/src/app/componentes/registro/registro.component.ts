import { Component, OnInit } from '@angular/core';
import { Jugador } from 'src/app/clases/jugador';
//para poder hacer las validaciones
//import { Validators, FormBuilder, FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  public jugador: Jugador;


  constructor() {}

  ngOnInit() {}

  public altaJugador(){

  }


}
