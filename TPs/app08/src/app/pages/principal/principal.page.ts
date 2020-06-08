import { Component, OnInit, ViewChild } from '@angular/core';
import { IonRadioGroup } from '@ionic/angular';
import { JuegoService } from 'src/app/services/juego.service';
import { RutasService } from 'src/app/services/rutas.service';
import { Observable } from 'rxjs/internal/Observable';
import { JuegoI } from 'src/app/interfaces/juego-i';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
  @ViewChild('radioGrupo') radioGrupo: IonRadioGroup;
  public listaJuegos: Observable<JuegoI[]>;

  constructor(private js: JuegoService, private rs: RutasService) {
    this.listaJuegos = this.js.listarJuegos();
  }

  ngOnInit() {}

  public jugar() {
    switch (this.radioGrupo.value) {
      case 'dc':
        this.js.seleccionarImagen('../../../assets/batman.png');
        break;
      case 'marvel':
        this.js.seleccionarImagen('../../../assets/ironman.png');
        break;
    }
    this.rs.juego();
  }
}
