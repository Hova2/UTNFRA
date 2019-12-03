import { Component, OnInit } from '@angular/core';
import { ActorService } from 'src/app/service/actor.service';
import { ActorI } from 'src/app/interface/actor-i';

@Component({
  selector: 'app-nexo-sus-apellido-componente',
  templateUrl: './nexo-sus-apellido-componente.component.html',
  styleUrls: ['./nexo-sus-apellido-componente.component.css']
})
export class NexoSusApellidoComponenteComponent implements OnInit {

  listaNacionalidades: Array<string>;
  listaActores: Array<ActorI>;

  constructor(private as: ActorService) {
    this.listaNacionalidades = this.as.traerNacionalidades();
  }

  ngOnInit() {
  }

  nacioEle(nacionalidad: string){
    this.listaActores = this.as.traerListadoPorNacionalidades(nacionalidad);
  }
}
