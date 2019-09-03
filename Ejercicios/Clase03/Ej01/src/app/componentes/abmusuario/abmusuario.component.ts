import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../clases/usuario';
import { ListadodeusuarioComponent } from '../../componentes/listadodeusuario/listadodeusuario.component';

@Component({
  selector: 'app-abmusuario',
  templateUrl: './abmusuario.component.html',
  styleUrls: ['./abmusuario.component.css']
})
export class AbmusuarioComponent implements OnInit {

  public usuario: Usuario;
  public listadoDeUsuarios: Usuario[];

  constructor() {
    this.usuario = new Usuario('','');
    this.listadoDeUsuarios = new Array();
  }

  ngOnInit() {
  }

  cargar(){
    this.listadoDeUsuarios.push(new Usuario(this.usuario.nombre,this.usuario.password));
    this.usuario.nombre = '';
    this.usuario.password = '';
  }

}
