import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbmUsuarioComponent } from './componentes/abm-usuario/abm-usuario.component';
import { MaestroDetalleComponent } from './componentes/maestro-detalle/maestro-detalle.component';
import { ListadoComponent } from './componentes/listado/listado.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    AbmUsuarioComponent,
    MaestroDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
