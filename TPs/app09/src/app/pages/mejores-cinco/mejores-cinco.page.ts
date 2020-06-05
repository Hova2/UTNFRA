import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { PartidoService } from 'src/app/services/partido.service';
import { CargandoService } from 'src/app/services/cargando.service';

@Component({
  selector: 'app-mejores-cinco',
  templateUrl: './mejores-cinco.page.html',
  styleUrls: ['./mejores-cinco.page.scss'],
})
export class MejoresCincoPage implements OnInit {
  public $listaDeMejoresCinco: Observable<Map<string, number>>;
  public chartTop5Mejores: any;
  public top5MejoresOpciones: any;

  constructor(private ps: PartidoService, private cs: CargandoService) {
    this.top5MejoresOpciones = {
      legend: {
        position: 'bottom',
      },
    };

    const spinner = this.cs.devolverSpinner();
    spinner.then((elemento) => {
      elemento.present();
    });
    this.$listaDeMejoresCinco = this.ps.traerTopCinco();
    setTimeout(() => {
      spinner.then((elemento) => {
        elemento.dismiss();
      });
    }, 3000);
    this.$listaDeMejoresCinco.subscribe((mapa) => {
      this.chartTop5Mejores = {
        labels: [...mapa.keys()],
        datasets: [
          {
            data: [...mapa.values()],
            backgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#FFCE56',
              '#00ff00',
              '#FFA500',
            ],
            hoverBackgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#FFCE56',
              '#00ff00',
              '#FFA500',
            ],
          },
        ],
      };
    });
  }

  ngOnInit() {}
}
