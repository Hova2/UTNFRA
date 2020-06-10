import { Component, OnInit, ViewChild } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
import * as olProj from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { MapBrowserEvent } from 'ol';
import { IonInput } from '@ionic/angular';
import { RutasService } from 'src/app/services/rutas.service';
import { AlarmaI } from 'src/app/interfaces/alarma-i';
import { AuthService } from 'src/app/services/auth.service';
import { AlarmaService } from 'src/app/services/alarma.service';
import { ToastService } from 'src/app/services/toast.service';
import { CargandoService } from 'src/app/services/cargando.service';

@Component({
  selector: 'app-carga-alarma',
  templateUrl: './carga-alarma.page.html',
  styleUrls: ['./carga-alarma.page.scss'],
})
export class CargaAlarmaPage implements OnInit {
  @ViewChild('dir') dir: IonInput;
  @ViewChild('dist') dist: IonInput;

  public map: Map;
  public coordenadas: Array<number>;
  public pathAlarma: String;
  public usuario: string;

  constructor(
    private ngeoc: NativeGeocoder,
    private ngeol: Geolocation,
    private rs: RutasService,
    private as: AuthService,
    private alas: AlarmaService,
    private tc: ToastService,
    private cs: CargandoService
  ) {
    this.coordenadas = new Array<number>();
    this.coordenadas.push(0);
    this.coordenadas.push(0);

    this.as.traerUsuarioActual().subscribe((usuario) => {
      this.usuario = usuario.email;
    });
  }

  ngOnInit() {
    const spinner = this.cs.devolverSpinner();
    spinner.then((elemento) => {
      elemento.present();
    });
    setTimeout(() => {
      this.ngeol
        .getCurrentPosition({ enableHighAccuracy: true })
        .then((datos) => {
          this.ngeoc
            .reverseGeocode(datos.coords.latitude, datos.coords.longitude)
            .then((datos) => {
              this.dir.value = `${datos[0].thoroughfare} ${datos[0].subThoroughfare} ${datos[0].administrativeArea}`;
            });
          this.map = new Map({
            target: 'mapa',
            layers: [
              new TileLayer({
                source: new OSM(),
              }),
            ],

            view: new View({
              center: olProj.fromLonLat([
                datos.coords.longitude,
                datos.coords.latitude,
              ]),
              zoom: 10,
            }),
          });
          this.map.on('singleclick', (evento: MapBrowserEvent) => {
            this.coordenadas = olProj.transform(
              evento.coordinate,
              'EPSG:3857',
              'EPSG:4326'
            );
            this.ngeoc
              .reverseGeocode(this.coordenadas[1], this.coordenadas[0])
              .then((datos) => {
                this.dir.value = `${datos[0].thoroughfare} ${datos[0].subThoroughfare} ${datos[0].administrativeArea}`;
              });
          });
        });
      setTimeout(() => {
        spinner.then((elemento) => {
          elemento.dismiss();
        });
      }, 2000);
    }, 1000);
  }

  public volverAlMenu() {
    this.rs.principal();
  }

  public cargarAlarma(direccion: string) {
    if (direccion === null || direccion === '') {
      this.tc.mensajeGenerico('La direccion est obligatoria');
    } else if (
      this.dist.value.toString() === null ||
      this.dist.value.toString() === ''
    ) {
      this.tc.mensajeGenerico('La distancia es obligatoria');
    } else {
      const spinner = this.cs.devolverSpinner();
      let alarmaTmp: AlarmaI;
      this.ngeoc.forwardGeocode(direccion).then((datos) => {
        alarmaTmp = {
          usuario: this.usuario,
          latitud: datos[0].latitude,
          longitud: datos[0].longitude,
          distancia: parseInt(this.dist.value.toString()),
          direccion: direccion,
          urlAudio:
            'https://firebasestorage.googleapis.com/v0/b/tpapps-639a1.appspot.com/o/app06%2Faudios%2Falarma.mp3?alt=media&token=5688a6c3-8174-40e4-bff9-b5c61ce93c1c',
        };
        spinner.then((elemento) => {
          elemento.present();
        });
        this.alas.agregarAlarma(alarmaTmp).finally(() => {
          setTimeout(() => {
            spinner.then((elemento) => {
              elemento.dismiss();
            });
            this.tc.mensajeGenerico('La alarma se dio de alta correctamente');
            setTimeout(() => {
              this.volverAlMenu();
            }, 1000);
          }, 3000);
        });
      });
    }
  }
}
