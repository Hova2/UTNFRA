import { Component, OnInit, ViewChild } from '@angular/core';
import { App01FotosI } from 'src/app/interfaces/app01fotos-i';
import { Observable } from 'rxjs/internal/Observable';
import { FotoService } from 'src/app/services/foto.service';
import { AuthService } from 'src/app/services/auth.service';
import { OverlayPanel } from 'primeng/overlaypanel';

@Component({
  selector: 'app-lfotos',
  templateUrl: './lfotos.page.html',
  styleUrls: ['./lfotos.page.scss'],
})
export class LfotosPage implements OnInit {
  @ViewChild('pop')
  pop: OverlayPanel;
  public imagen: string;
  public $listaDeTodasLasFotos: Observable<App01FotosI[]>;

  constructor(private fs: FotoService, private as: AuthService) {
    this.$listaDeTodasLasFotos = this.fs.listaDeTodasLasFotos();
  }

  ngOnInit() {}

  public votarFoto(elemento: any) {
    this.as.traerUsuarioActual().subscribe((usuario) => {
      elemento.foto.usuariosVotaron.push(usuario.email);
      elemento.noPuedeVotar = true;
      this.fs.actualizarFoto(
        elemento.id,
        JSON.parse(JSON.stringify(elemento.foto))
      );
    });
  }

  public mostratFoto(evento: any, urlFoto: string) {
    this.imagen = urlFoto;
    this.pop.show(evento);
  }
}
