import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RutasService {
  constructor(private router: Router) {}

  public principal() {
    this.router.navigate(['principal/sfotos']);
  }
}
