import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filto-su-apellido',
  templateUrl: './filto-su-apellido.component.html',
  styleUrls: ['./filto-su-apellido.component.css']
})
export class FiltoSuApellidoComponent implements OnInit {

  @Input() listaNacionalidades: Array<string>;
  @Output() nacionalidadElegida = new EventEmitter<string>();


  constructor() { }

  ngOnInit() {
  }

  nacionalidadSel(evento){
    this.nacionalidadElegida.emit(evento.value);
  }

}
