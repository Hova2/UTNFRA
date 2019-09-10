import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Usuario } from '../../clases/usuario';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  @Input() listadoDeUsuarios: Usuario[];
  @Output() seSelecciono: EventEmitter<any>;

  constructor() {
   /*this.listadoDeUsuarios.push(new Usuario);
   this.listadoDeUsuarios.push(new Usuario);
   this.listadoDeUsuarios.push(new Usuario);*/

   /*this.listadoDeUsuarios =[
     {nombre: 'hola1', clave: 'chau1'},
     {nombre: 'hola2', clave: 'chau2'},
     {nombre: 'hola3', clave: 'chau3'}
   ]*/


  }

  ngOnInit() {
  }

  editar(usuario: Usuario){
    console.log(usuario);
    this.seSelecciono.emit(usuario);
  }



}
