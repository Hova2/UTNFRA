import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IonButton, IonImg, IonThumbnail } from '@ionic/angular';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
  @ViewChild('boton1')
  boton1: IonButton;
  @ViewChild('boton2')
  boton2: IonButton;
  @ViewChild('boton3')
  boton3: IonButton;
  @ViewChild('boton4')
  boton4: IonButton;
  @ViewChild('boton5')
  boton5: IonButton;
  @ViewChild('imagen1')
  imagen1: IonImg;
  @ViewChild('imagen2')
  imagen2: IonImg;
  @ViewChild('imagen3')
  imagen3: IonImg;
  @ViewChild('imagen4')
  imagen4: IonImg;
  @ViewChild('imagen5')
  imagen5: IonImg;
  public tema: string;
  public idioma: string;
  public thumbnail1Css: string;
  public thumbnail2Css: string;
  public thumbnail3Css: string;
  public thumbnail4Css: string;
  public thumbnail5Css: string;
  public temaActivo: string;
  public idiomaActivo: string;

  constructor(private na: NativeAudio) {
    this.tema = 'colores';
    this.temaActivo = '../../../assets/colores.png';
    this.idioma = 'español';
    this.idiomaActivo = '../../../assets/esp.png';
    this.thumbnail1Css = 'altura-100 md hydrated ion-hide';
    this.thumbnail2Css = 'altura-100 md hydrated ion-hide';
    this.thumbnail3Css = 'altura-100 md hydrated ion-hide';
    this.thumbnail4Css = 'altura-100 md hydrated ion-hide';
    this.thumbnail5Css = 'altura-100 md hydrated ion-hide';
    this.na.preloadSimple('rojoesp', 'assets/rojoesp.mp3');
    this.na.preloadSimple('azulesp', 'assets/azulesp.mp3');
    this.na.preloadSimple('amarilloesp', 'assets/amarilloesp.mp3');
    this.na.preloadSimple('naranjaesp', 'assets/naranjaesp.mp3');
    this.na.preloadSimple('verdeesp', 'assets/verdeesp.mp3');
    this.na.preloadSimple('rojoing', 'assets/rojoing.mp3');
    this.na.preloadSimple('azuling', 'assets/azuling.mp3');
    this.na.preloadSimple('amarilloing', 'assets/amarilloing.mp3');
    this.na.preloadSimple('naranjaing', 'assets/naranjaing.mp3');
    this.na.preloadSimple('verdeing', 'assets/verdeing.mp3');
    this.na.preloadSimple('rojopor', 'assets/rojopor.mp3');
    this.na.preloadSimple('azulpor', 'assets/azulpor.mp3');
    this.na.preloadSimple('amarillopor', 'assets/amarillopor.mp3');
    this.na.preloadSimple('naranjapor', 'assets/naranjapor.mp3');
    this.na.preloadSimple('verdepor', 'assets/verdepor.mp3');
    this.na.preloadSimple('unoesp', 'assets/unoesp.mp3');
    this.na.preloadSimple('dosesp', 'assets/dosesp.mp3');
    this.na.preloadSimple('tresesp', 'assets/tresesp.mp3');
    this.na.preloadSimple('cuatroesp', 'assets/cuatroesp.mp3');
    this.na.preloadSimple('cincoesp', 'assets/cincoesp.mp3');
    this.na.preloadSimple('unoing', 'assets/unoing.mp3');
    this.na.preloadSimple('dosing', 'assets/dosing.mp3');
    this.na.preloadSimple('tresing', 'assets/tresing.mp3');
    this.na.preloadSimple('cuatroing', 'assets/cuatroing.mp3');
    this.na.preloadSimple('cincoing', 'assets/cincoing.mp3');
    this.na.preloadSimple('unopor', 'assets/unopor.mp3');
    this.na.preloadSimple('dospor', 'assets/dospor.mp3');
    this.na.preloadSimple('trespor', 'assets/trespor.mp3');
    this.na.preloadSimple('cuatropor', 'assets/cuatropor.mp3');
    this.na.preloadSimple('cincopor', 'assets/cincopor.mp3');
    this.na.preloadSimple('conejoesp', 'assets/conejoesp.mp3');
    this.na.preloadSimple('erizoesp', 'assets/erizoesp.mp3');
    this.na.preloadSimple('ardillaesp', 'assets/ardillaesp.mp3');
    this.na.preloadSimple('mapacheesp', 'assets/mapacheesp.mp3');
    this.na.preloadSimple('osoesp', 'assets/osoesp.mp3');
    this.na.preloadSimple('conejoing', 'assets/conejoing.mp3');
    this.na.preloadSimple('erizoing', 'assets/erizoing.mp3');
    this.na.preloadSimple('ardillaing', 'assets/ardillaing.mp3');
    this.na.preloadSimple('mapacheing', 'assets/mapacheing.mp3');
    this.na.preloadSimple('osoing', 'assets/osoing.mp3');
    this.na.preloadSimple('conejopor', 'assets/conejopor.mp3');
    this.na.preloadSimple('erizopor', 'assets/erizopor.mp3');
    this.na.preloadSimple('ardillapor', 'assets/ardillapor.mp3');
    this.na.preloadSimple('mapachepor', 'assets/mapachepor.mp3');
    this.na.preloadSimple('osopor', 'assets/osopor.mp3');
  }

  ngOnInit() {}

  public cambiarTema(tema: string) {
    this.tema = tema;
    switch (tema) {
      case 'colores':
        this.temaActivo = '../../../assets/colores.png';
        this.boton1.color = '';
        this.boton2.color = '';
        this.boton3.color = '';
        this.boton4.color = '';
        this.boton5.color = '';
        this.imagen1.src = '';
        this.imagen2.src = '';
        this.imagen3.src = '';
        this.imagen4.src = '';
        this.imagen5.src = '';
        this.thumbnail1Css = 'altura-100 md hydrated ion-hide';
        this.thumbnail2Css = 'altura-100 md hydrated ion-hide';
        this.thumbnail3Css = 'altura-100 md hydrated ion-hide';
        this.thumbnail4Css = 'altura-100 md hydrated ion-hide';
        this.thumbnail5Css = 'altura-100 md hydrated ion-hide';
        break;
      case 'números':
        this.temaActivo = '../../../assets/numeros.png';
        this.boton1.color = 'tertiary';
        this.boton2.color = 'tertiary';
        this.boton3.color = 'tertiary';
        this.boton4.color = 'tertiary';
        this.boton5.color = 'tertiary';
        this.imagen1.src = '../../../assets/uno.png';
        this.imagen2.src = '../../../assets/dos.png';
        this.imagen3.src = '../../../assets/tres.png';
        this.imagen4.src = '../../../assets/cuatro.png';
        this.imagen5.src = '../../../assets/cinco.png';
        this.thumbnail1Css = 'altura-100 md hydrated';
        this.thumbnail2Css = 'altura-100 md hydrated';
        this.thumbnail3Css = 'altura-100 md hydrated';
        this.thumbnail4Css = 'altura-100 md hydrated';
        this.thumbnail5Css = 'altura-100 md hydrated';
        break;
      case 'animales':
        this.temaActivo = '../../../assets/animales.png';
        this.boton1.color = 'tertiary';
        this.boton2.color = 'tertiary';
        this.boton3.color = 'tertiary';
        this.boton4.color = 'tertiary';
        this.boton5.color = 'tertiary';
        this.imagen1.src = '../../../assets/conejo.png';
        this.imagen2.src = '../../../assets/erizo.png';
        this.imagen3.src = '../../../assets/ardilla.png';
        this.imagen4.src = '../../../assets/mapache.png';
        this.imagen5.src = '../../../assets/oso.png';
        this.thumbnail1Css = 'altura-100 ancho-35 md hydrated';
        this.thumbnail2Css = 'altura-100 ancho-35 md hydrated';
        this.thumbnail3Css = 'altura-100 ancho-35 md hydrated';
        this.thumbnail4Css = 'altura-100 ancho-35 md hydrated';
        this.thumbnail5Css = 'altura-100 ancho-35 md hydrated';
        break;
    }
  }

  public cambiarIdioma(idioma: string) {
    this.idioma = idioma;
    switch (idioma) {
      case 'español':
        this.idiomaActivo = '../../../assets/esp.png';
        break;
      case 'inglés':
        this.idiomaActivo = '../../../assets/ing.png';
        break;
      case 'portugués':
        this.idiomaActivo = '../../../assets/por.png';
        break;
    }
  }

  public reproducirAudio(boton: string) {
    switch (this.tema) {
      case 'colores':
        switch (this.idioma) {
          case 'español':
            switch (boton) {
              case 'boton1':
                this.na.play('rojoesp');
                break;
              case 'boton2':
                this.na.play('azulesp');
                break;
              case 'boton3':
                this.na.play('amarilloesp');
                break;
              case 'boton4':
                this.na.play('naranjaesp');
                break;
              case 'boton5':
                this.na.play('verdeesp');
                break;
            }
            break;
          case 'inglés':
            switch (boton) {
              case 'boton1':
                this.na.play('rojoing');
                break;
              case 'boton2':
                this.na.play('azuling');
                break;
              case 'boton3':
                this.na.play('amarilloing');
                break;
              case 'boton4':
                this.na.play('naranjaing');
                break;
              case 'boton5':
                this.na.play('verdeing');
                break;
            }
            break;
          case 'portugués':
            switch (boton) {
              case 'boton1':
                this.na.play('rojopor');
                break;
              case 'boton2':
                this.na.play('azulpor');
                break;
              case 'boton3':
                this.na.play('amarillopor');
                break;
              case 'boton4':
                this.na.play('naranjapor');
                break;
              case 'boton5':
                this.na.play('verdepor');
                break;
            }
            break;
        }
        break;
      case 'números':
        switch (this.idioma) {
          case 'español':
            switch (boton) {
              case 'boton1':
                this.na.play('unoesp');
                break;
              case 'boton2':
                this.na.play('dosesp');
                break;
              case 'boton3':
                this.na.play('tresesp');
                break;
              case 'boton4':
                this.na.play('cuatroesp');
                break;
              case 'boton5':
                this.na.play('cincoesp');
                break;
            }
            break;
          case 'inglés':
            switch (boton) {
              case 'boton1':
                this.na.play('unoing');
                break;
              case 'boton2':
                this.na.play('dosing');
                break;
              case 'boton3':
                this.na.play('tresing');
                break;
              case 'boton4':
                this.na.play('cuatroing');
                break;
              case 'boton5':
                this.na.play('cincoing');
                break;
            }
            break;
          case 'portugués':
            switch (boton) {
              case 'boton1':
                this.na.play('unopor');
                break;
              case 'boton2':
                this.na.play('dospor');
                break;
              case 'boton3':
                this.na.play('trespor');
                break;
              case 'boton4':
                this.na.play('cuatropor');
                break;
              case 'boton5':
                this.na.play('cincopor');
                break;
            }
            break;
        }
        break;
      case 'animales':
        switch (this.idioma) {
          case 'español':
            switch (boton) {
              case 'boton1':
                this.na.play('conejoesp');
                break;
              case 'boton2':
                this.na.play('erizoesp');
                break;
              case 'boton3':
                this.na.play('ardillaesp');
                break;
              case 'boton4':
                this.na.play('mapacheesp');
                break;
              case 'boton5':
                this.na.play('osoesp');
                break;
            }
            break;
          case 'inglés':
            switch (boton) {
              case 'boton1':
                this.na.play('conejoing');
                break;
              case 'boton2':
                this.na.play('erizoing');
                break;
              case 'boton3':
                this.na.play('ardillaing');
                break;
              case 'boton4':
                this.na.play('mapacheing');
                break;
              case 'boton5':
                this.na.play('osoing');
                break;
            }
            break;
          case 'portugués':
            switch (boton) {
              case 'boton1':
                this.na.play('conejopor');
                break;
              case 'boton2':
                this.na.play('erizopor');
                break;
              case 'boton3':
                this.na.play('ardillapor');
                break;
              case 'boton4':
                this.na.play('mapachepor');
                break;
              case 'boton5':
                this.na.play('osopor');
                break;
            }
            break;
        }
        break;
    }
  }
}
