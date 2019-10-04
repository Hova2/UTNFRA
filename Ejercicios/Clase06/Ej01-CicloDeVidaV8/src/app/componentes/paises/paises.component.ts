import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaisesService } from './../../servicios/paises/paises.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css'],
  providers:  [ PaisesService ]
})
export class PaisesComponent implements OnInit {

  constructor(private paisesService: PaisesService, private route: Router) { }

  public paises = [];

  ngOnInit() {
    this.paisesService.BuscarTodos().subscribe(element => this.paises = element);
  }

  mostrarDetalle(){
    this.route.navigate(['/paises_detalle']);
  }

}
