import { Component, OnInit } from '@angular/core';
import { Juego } from 'src/app/clases/juego';
import { JuegoService } from '../../servicios/juego-service.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  public listadoJuegos: Array<Juego>;

  constructor(private juegServ: JuegoService) {
  }

  ngOnInit() {}

  public llamaService(): Array<Juego> {
    this.listadoJuegos = this.juegServ.traerJuegosTodos();
    return this.listadoJuegos;
  }

  public llamaServicePromesa(): Array<Juego> {
    this.listadoJuegos = this.juegServ.traerJuegosTodos();
    return this.listadoJuegos;
  }
}
