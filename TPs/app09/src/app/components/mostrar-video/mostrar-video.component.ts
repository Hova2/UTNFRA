import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-mostrar-video',
  templateUrl: './mostrar-video.component.html',
  styleUrls: ['./mostrar-video.component.scss'],
})
export class MostrarVideoComponent implements OnInit {
  public elemento: any;

  constructor(private mc: ModalController, private np: NavParams) {
    this.elemento = this.np.get('elemento');
  }

  ngOnInit() {}

  public salir() {
    this.mc.dismiss();
  }
}
