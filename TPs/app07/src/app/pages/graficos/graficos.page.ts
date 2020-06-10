import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FotoService } from 'src/app/services/foto.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.page.html',
  styleUrls: ['./graficos.page.scss'],
})
export class GraficosPage implements OnInit {
  public imagen: string;
  public top3MasLindasOpciones: any;
  public top3MasLindas: Observable<Map<string, number>>;
  public chatTop3MasLindas: any;
  public top3MasFeasOpciones: any;
  public top3MasFeas: Observable<Map<string, number>>;
  public chatTop3MasFeas: any;

  constructor(private fs: FotoService) {
    this.top3MasLindasOpciones = {
      title: {
        display: true,
        text: 'Top 3 en votos de las fotos mas lindas',
        fontSize: 16,
      },
      legend: {
        position: 'bottom',
      },
    };
    this.top3MasLindas = this.fs.traerTop3MasLindas();
    this.top3MasLindas.subscribe((fotos) => {
      this.chatTop3MasLindas = {
        labels: ['Primera', 'Segunda', 'Tercera'],
        datasets: [
          {
            data: [...fotos.values()],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          },
        ],
      };
    });
    this.top3MasFeasOpciones = {
      title: {
        display: true,
        text: 'Top 3 en votos de las fotos mas feas',
        fontSize: 16,
      },
      legend: {
        position: 'bottom',
      },
    };
    this.top3MasFeas = this.fs.traerTop3MasFeas();
    this.top3MasFeas.subscribe((fotos) => {
      const mapaAArreglo = Array.from(fotos.values());
      this.chatTop3MasFeas = {
        labels: ['Primera', 'Segunda', 'Tercera'],
        datasets: [
          {
            label: 'Primera',
            backgroundColor: '#FF6384',
            borderColor: '#FF6384',
            data: [mapaAArreglo[0], 0, 0],
          },
          {
            label: 'Segunda',
            backgroundColor: '#36A2EB',
            borderColor: '#36A2EB',
            data: [0, mapaAArreglo[1], 0],
          },
          {
            label: 'Tercera',
            backgroundColor: '#FFCE56',
            borderColor: '#FFCE56',
            data: [0,0,mapaAArreglo[2]],
          },
        ],
      };
    });
  }

  ngOnInit() {}

  public masLindaSeleccionada($event: any) {
    this.top3MasLindas.subscribe((fotos) => {
      const mapaAArreglo = Array.from(fotos.keys());
      this.imagen = mapaAArreglo[$event.element._index];
    });
  }

  public masFeaSeleccionada($event: any) {
    this.top3MasFeas.subscribe((fotos) => {
      const mapaAArreglo = Array.from(fotos.keys());
      this.imagen = mapaAArreglo[$event.element._index];
    });
  }
}
