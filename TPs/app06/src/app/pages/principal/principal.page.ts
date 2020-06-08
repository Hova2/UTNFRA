import { Component, OnInit, ViewChild } from '@angular/core';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
  //@ViewChild('dir') dir: IonInput;

  constructor(private ngeoc: NativeGeocoder, private ngeol: Geolocation) {}

  ngOnInit() {}

  public traerCoordenadas(dir: string) {

    this.ngeoc
      .forwardGeocode(dir, { useLocale: true, maxResults: 5 })
      .then((result) => {
        /*result.forEach((item) => {
          console.log(item.latitude);
          console.log(item.longitude);
          console.log(item.postalCode);
          console.log(item.countryName);
          console.log(item.subAdministrativeArea);
        });*/
        //console.table(result);
      });
    this.ngeol
      .getCurrentPosition({ enableHighAccuracy: true })
      .then((datos) => {
        const distancia = this.calcularDistancia(
          {
            latitude: -34.6024901,
            longitude: -58.4487588,
          },
          {
            latitude: datos.coords.latitude,
            longitude: datos.coords.longitude,
          }
        );

          if(distancia * 1000 < 200){
            console.log('alarma')
          }

      });
  }

  private toRad(value) {
    const RADIANT_CONSTANT = 0.0174532925199433;
    return value * RADIANT_CONSTANT;
  }

  private calcularDistancia(starting, ending) {
    const KM_RATIO = 6371;
    try {
      const dLat = this.toRad(ending.latitude - starting.latitude);
      const dLon = this.toRad(ending.longitude - starting.longitude);
      const lat1Rad = this.toRad(starting.latitude);
      const lat2Rad = this.toRad(ending.latitude);

      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.sin(dLon / 2) *
          Math.sin(dLon / 2) *
          Math.cos(lat1Rad) *
          Math.cos(lat2Rad);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const d = KM_RATIO * c;
      return d;
    } catch (e) {
      return -1;
    }
  }
}
