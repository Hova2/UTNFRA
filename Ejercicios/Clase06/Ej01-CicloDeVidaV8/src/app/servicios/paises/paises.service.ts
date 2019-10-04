import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MihttpService } from '../mihttp/mihttp.service';

@Injectable({
  providedIn: 'root'
})

export class PaisesService {

  private paisSeleccionado: any;

  constructor(private route: Router, private miHttp: MihttpService) { }

  BuscarTodos() {
    return this.miHttp.httpGetO('all');
  }

  paisSelec(pais: any){
    this.paisSeleccionado = pais;
    this.route.navigate(['paises_detalle']);
    console.log("service: ",this.paisSeleccionado.name);
  }

  getPaisSel(): any{
    return this.paisSeleccionado;
  }

}
