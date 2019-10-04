import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { Usuario } from 'src/app/clases/usuario';
import { PaisesService } from './../../servicios/paises/paises.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  constructor(private paisesService: PaisesService, private route: Router, private authGuard: AuthGuard) { }

  public paises = [];
  private usuarioLogueado: Usuario;

  ngOnInit() {
    this.paisesService.BuscarTodos().subscribe(element => this.paises = element);
    this.usuarioLogueado = JSON.parse(localStorage.getItem('usuario'));

  }

  mostrarDetalle(pais: any){
    this.paisesService.paisSelec(pais);
  }

  esAdmin(): boolean{
    if (this.usuarioLogueado.perfil === 'admin') {
      return true;
    }
    return false;
  }

}
