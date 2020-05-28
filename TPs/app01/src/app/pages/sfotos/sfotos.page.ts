import { Component, OnInit } from '@angular/core';
import { ArchivoService } from 'src/app/services/archivo.service';


@Component({
  selector: 'app-sfotos',
  templateUrl: './sfotos.page.html',
  styleUrls: ['./sfotos.page.scss'],
})
export class SfotosPage implements OnInit {
  listadoDeFotos: Promise<any> = null;

  constructor(private as: ArchivoService) {}

  ngOnInit() {}

  public borrarFoto(nombreFoto: string) {
    this.as.borrarFoto(nombreFoto).finally(async () => {
      this.listadoDeFotos = this.as.listarDirectorio();
      const lista = await this.listadoDeFotos;
      if(lista.length === 0){
        this.listadoDeFotos = null;
      }
    });
  }

  public recargarLista(variable: boolean) {
    this.listadoDeFotos = this.as.listarDirectorio();
  }

  public subirFotos() {
    this.as.subirFotos();
    this.listadoDeFotos = null;
  }
}
