import { PaisesService } from './../../servicios/paises/paises.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css'],
  providers:  [ PaisesService ]
})
export class PaisesComponent implements OnInit {

  constructor(private paisesService: PaisesService) { }

  public paises = [];

  ngOnInit() {
    this.paisesService.BuscarTodos().subscribe(element => this.paises = element);
  }

}
