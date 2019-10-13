import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListadoPeliculasComponent } from './component/listado-peliculas/listado-peliculas.component';
import { MaterialModule } from './material-module';
import { BotonBorrarComponent } from './component/boton-borrar/boton-borrar.component';
import { BuscarPeliculaComponent } from './component/buscar-pelicula/buscar-pelicula.component';
import { MostrarBusquedaComponent } from './component/mostrar-busqueda/mostrar-busqueda.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListadoPeliculasComponent,
    BotonBorrarComponent,
    BuscarPeliculaComponent,
    MostrarBusquedaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
