import { Component, OnInit, ViewChild } from '@angular/core';
import { FotoService } from 'src/app/services/foto.service';
import { Observable } from 'rxjs/internal/Observable';
import { App01FotosI } from 'src/app/interfaces/app01fotos-i';
import { OverlayPanel } from 'primeng/overlaypanel/public_api';

@Component({
  selector: 'app-mfotos',
  templateUrl: './mfotos.page.html',
  styleUrls: ['./mfotos.page.scss'],
})
export class MfotosPage implements OnInit {
  @ViewChild('pop')
  pop: OverlayPanel;
  public imagen: string;
  public $listaFotosUsuario: Observable<App01FotosI[]>;

  constructor(private fs: FotoService) {
    this.$listaFotosUsuario = this.fs.listaFotosUsuario();
  }

  ngOnInit() {}

  public mostratFoto(evento: any, urlFoto: string) {
    this.imagen = urlFoto;
    this.pop.show(evento);
  }
}
