import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { ErrorComponent } from './componentes/error/error.component';
import { GrillaUsuariosComponent } from './componentes/grilla-usuarios/grilla-usuarios.component';
import { ListadoDeUsuariosComponent } from './componentes/listado-de-usuarios/listado-de-usuarios.component';
import { LoginComponent } from './componentes/login/login.component';
import { PaisesDetalleComponent } from './componentes/paises-detalle/paises-detalle.component';
import { PaisesComponent } from './componentes/paises/paises.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { MihttpService } from './servicios/mihttp/mihttp.service';
import { PaisesService } from './servicios/paises/paises.service';




@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    LoginComponent,
    ErrorComponent,
    ListadoDeUsuariosComponent,
    UsuarioComponent,
    GrillaUsuariosComponent,
    PaisesComponent,
    PaisesDetalleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [ PaisesService, MihttpService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
