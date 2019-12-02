import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListadoPeliculasComponent } from './component/peliculas/listado-peliculas/listado-peliculas.component';
import { MaterialModule } from './material-module';
import { BotonBorrarComponent } from './component/boton-borrar/boton-borrar.component';
import { BuscarPeliculaComponent } from './component/buscar-pelicula/buscar-pelicula.component';
import { MostrarBusquedaComponent } from './component/mostrar-busqueda/mostrar-busqueda.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BienvenidoComponent } from './component/bienvenido/bienvenido.component';
import { AltaActorComponent } from './component/actor/alta-actor/alta-actor.component';
import { AltaPeliculaComponent } from './component/peliculas/alta-pelicula/alta-pelicula.component';
import { ListadoActoresComponent } from './component/actor/listado-actores/listado-actores.component';
import { PeliculaService } from './service/pelicula.service';
import { ActorService } from './service/actor.service';



@NgModule({
  declarations: [
    AppComponent,
    ListadoPeliculasComponent,
    BotonBorrarComponent,
    BuscarPeliculaComponent,
    MostrarBusquedaComponent,
    BienvenidoComponent,
    AltaActorComponent,
    AltaPeliculaComponent,
    ListadoActoresComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [
    PeliculaService,
    ActorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
