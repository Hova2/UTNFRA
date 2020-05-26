import { Component, OnInit } from '@angular/core';
import { ArchivoService } from 'src/app/services/archivo.service';

@Component({
  selector: 'app-sfotos',
  templateUrl: './sfotos.page.html',
  styleUrls: ['./sfotos.page.scss'],
})
export class SfotosPage implements OnInit {
  imagenesCosasLindas: Promise<any>;

  constructor(private as: ArchivoService) {}

  ngOnInit() {
    this.imagenesCosasLindas = this.as.listarDirectorio();
  }

  public subirFotos() {
    this.as.borrarArchivos().finally(() => {
      this.imagenesCosasLindas = this.as.listarDirectorio();
    });
  }

  public recargarLista(variable: boolean) {
    this.imagenesCosasLindas = this.as.listarDirectorio();
  }
}
