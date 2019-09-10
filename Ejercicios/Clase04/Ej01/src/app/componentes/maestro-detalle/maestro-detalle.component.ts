import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../clases/usuario';

@Component({
  selector: 'app-maestro-detalle',
  templateUrl: './maestro-detalle.component.html',
  styleUrls: ['./maestro-detalle.component.css']
})
export class MaestroDetalleComponent implements OnInit {

  listadoDeUsuarios: Usuario[];
  usuarioSeleccion: Usuario;

  constructor() {
    this.listadoDeUsuarios = new Array();
  }

  ngOnInit() {
  }

  otra(usuario: any){
    this.listadoDeUsuarios.push(usuario);
  }

  seleccionado(usuario: any){

  }
}
