import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, ToastController, LoadingController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { firebaseConfig } from 'src/environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireFunctions } from '@angular/fire/functions';
import { AuthService } from './services/auth.service';
import { UsuarioService } from './services/usuario.service';
import { ToastService } from './services/toast.service';
import { CargandoService } from './services/cargando.service';
import { RutasService } from './services/rutas.service';
import { Camera } from '@ionic-native/camera/ngx';
import { ArchivoService } from './services/archivo.service';
import { File } from '@ionic-native/file/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AngularFirestore,
    AngularFireStorage,
    AngularFireAuth,
    AngularFireFunctions,
    AuthService,
    FormBuilder,
    UsuarioService,
    ToastController,
    ToastService,
    LoadingController,
    CargandoService,
    RutasService,
    Camera,
    ArchivoService,
    File
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
