import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { MihttpService } from '../mihttp/mihttp.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class PaisesService {

  public paisSeleccionado: any;

  constructor(private route: Router, private miHttp: MihttpService) { }

  BuscarTodos() {
    return this.miHttp.httpGetO('all');
  }

  verDetalle(pais:any){
    this.paisSeleccionado = pais;
    this.route.navigate(['/paises_detalle']);
    console.log("service: ",this.paisSeleccionado.name);
  }
}
