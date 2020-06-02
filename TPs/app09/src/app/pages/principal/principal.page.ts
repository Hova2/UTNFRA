import { Component, OnInit } from '@angular/core';
import { RutasService } from 'src/app/services/rutas.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  constructor(
    private rs: RutasService
  ) { }

  ngOnInit() {
  }

  public redirector(pagina: string){
    this.rs.principalRutas(pagina);
  }

}
