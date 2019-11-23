import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-listado',
  templateUrl: './tabla-listado.component.html',
  styleUrls: ['./tabla-listado.component.scss']
})
export class TablaListadoComponent implements OnInit {

  @Input() rol: string;

  constructor() { }

  ngOnInit() {
  }

}
