import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { ErrorComponent } from './componentes/error/error.component';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './componentes/listado/listado.component';
import { AbmUsuarioComponent } from './componentes/abm-usuario/abm-usuario.component';
import { MaestroDetalleComponent } from './componentes/maestro-detalle/maestro-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BienvenidoComponent,
    ErrorComponent,
    ListadoComponent,
    AbmUsuarioComponent,
    MaestroDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
