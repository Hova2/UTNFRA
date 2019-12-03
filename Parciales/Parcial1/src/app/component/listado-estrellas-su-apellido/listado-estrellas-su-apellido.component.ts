import { Component, OnInit, Input } from '@angular/core';
import { ActorI } from 'src/app/interface/actor-i';

@Component({
  selector: 'app-listado-estrellas-su-apellido',
  templateUrl: './listado-estrellas-su-apellido.component.html',
  styleUrls: ['./listado-estrellas-su-apellido.component.css']
})
export class ListadoEstrellasSuApellidoComponent implements OnInit {

  @Input() listadoActores: Array<ActorI>;

  constructor() { }

  ngOnInit() {
  }

}
