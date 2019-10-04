import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { ErrorComponent } from './componentes/error/error.component';
import { LoginComponent } from './componentes/login/login.component';
import { PaisesDetalleComponent } from './componentes/paises-detalle/paises-detalle.component';
import { PaisesComponent } from './componentes/paises/paises.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';


const miRuteo = [
  { path: 'bienvenida', component: BienvenidaComponent },
  { path: 'login', component: LoginComponent, data: {animation: 'Login'} },
  { path: 'paises_detalle', component: PaisesDetalleComponent },
  { path: 'usuario', component: UsuarioComponent,
    canActivate: [AuthGuard],
    data: {animation: 'Usuario'} },
  { path: 'paises', component: PaisesComponent },
  { path: '', component: LoginComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(miRuteo),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
