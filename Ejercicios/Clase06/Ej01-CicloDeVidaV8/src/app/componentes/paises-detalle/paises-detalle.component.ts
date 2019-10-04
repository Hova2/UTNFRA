import { Component, OnInit } from '@angular/core';
import { PaisesService } from 'src/app/servicios/paises/paises.service';

@Component({
  selector: 'app-paises-detalle',
  templateUrl: './paises-detalle.component.html',
  styleUrls: ['./paises-detalle.component.css']
})
export class PaisesDetalleComponent implements OnInit {

  mipais: any;
  constructor(public paisesService: PaisesService) {
    this.mipais = this.paisesService.paisSeleccionado;
   }

  ngOnInit() {
    console.log(this.mipais);
  }

}
