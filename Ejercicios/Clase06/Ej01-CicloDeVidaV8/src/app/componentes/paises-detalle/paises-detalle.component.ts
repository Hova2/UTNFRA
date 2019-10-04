import { Component, OnInit } from '@angular/core';
import { PaisesService } from './../../servicios/paises/paises.service';

@Component({
  selector: 'app-paises-detalle',
  templateUrl: './paises-detalle.component.html',
  styleUrls: ['./paises-detalle.component.css']
})
export class PaisesDetalleComponent implements OnInit {

  public mipais: any;

  constructor(private paisesService: PaisesService) {
   this.mipais = this.paisesService.getPaisSel();
  }

  ngOnInit() {
    console.log(this.mipais);
  }

}
