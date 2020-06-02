import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RutasService {
  constructor(private router: Router) {}

  public principal() {
    this.router.navigate(['principal/partido']);
  }

  public principalRutas(pagina: string) {
    this.router.navigate(['principal/' + pagina]);
  }
}
