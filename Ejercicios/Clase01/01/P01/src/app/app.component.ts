import { Component, OnInit } from '@angular/core';
import { Usuario } from './Clases/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  miTitulo:Usuario;
  title:String;
  
  constructor(){
    this.miTitulo=new Usuario("Primera App");
  }

  ngOnInit(){
    this.title = this.miTitulo.titulo;
  }
  
}
