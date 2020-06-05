import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-mostrar-foto',
  templateUrl: './mostrar-foto.component.html',
  styleUrls: ['./mostrar-foto.component.scss'],
})
export class MostrarFotoComponent implements OnInit {
  public elemento: any;

  constructor(private mc: ModalController, private np: NavParams) {
    this.elemento = this.np.get('elemento');
  }

  ngOnInit() {}

  public salir() {
    this.mc.dismiss();
  }
}
