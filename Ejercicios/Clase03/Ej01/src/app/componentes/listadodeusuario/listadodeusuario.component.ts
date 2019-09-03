import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../../clases/usuario';

@Component({
  selector: 'app-listadodeusuario',
  templateUrl: './listadodeusuario.component.html',
  styleUrls: ['./listadodeusuario.component.css']
})
export class ListadodeusuarioComponent implements OnInit {

  @Input() listadoDeUsuarios: Usuario[];

  constructor() {
    /*this.listadoDeUsuarios = new Array();
    this.listadoDeUsuarios.push(new Usuario('Usuario1','Pass1'));
    this.listadoDeUsuarios.push(new Usuario('Usuario2','Pass2'));
    this.listadoDeUsuarios.push(new Usuario('Usuario3','Pass3'));*/
  }

  ngOnInit() {
  }

}
