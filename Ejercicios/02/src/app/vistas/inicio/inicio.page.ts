import { Component, OnInit } from '@angular/core';
import { Idioma } from 'src/app/clases/idioma';
import { Tema } from 'src/app/clases/tema';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  idiomas: Array<Idioma>;

  constructor() { 
    this.idiomas = new Array<Idioma>();
  }

  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    this.idiomas.push(new Idioma('Ingles', new Tema(['Yelow', 'Green', 'Blue', 'Black'], ['One', 'Two', 'Tree', 'Four'], ['Cat', 'Dog', 'Cow', 'Duck'])));
    // tslint:disable-next-line: max-line-length
    this.idiomas.push(new Idioma('Espanol', new Tema(['Amarillo', 'Verde', 'Azul', 'Negro'], ['Uno', 'Dos', 'Tres', 'Cuatro'], ['Gato', 'Perro', 'Vaca', 'Pato'])));
    // tslint:disable-next-line: max-line-length
    this.idiomas.push(new Idioma('Portuges', new Tema(['Yelow', 'Green', 'Blue', 'Black'], ['One', 'Two', 'Tree', 'Four'], ['Cat', 'Dog', 'Cow', 'Duck'])));
     }

}
