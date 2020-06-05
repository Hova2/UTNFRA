import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RutasService {
  constructor(private router: Router) {}

  public principalAdmin() {
    this.router.navigate(['principal/partido']);
  }

  public principalUsuario() {
    this.router.navigate(['principal/lista-partidos']);
  }

  public principalRutas(pagina: string) {
    this.router.navigate(['principal/' + pagina]);
  }
}
