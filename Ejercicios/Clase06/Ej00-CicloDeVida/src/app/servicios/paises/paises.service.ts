import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { MihttpService } from '../mihttp/mihttp.service';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private miHttp: MihttpService) { }

  BuscarTodos() {
    return this.miHttp.httpGetO('all');
  }
}
