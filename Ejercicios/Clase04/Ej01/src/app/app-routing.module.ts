import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { ErrorComponent } from './componentes/error/error.component';
import { ListadoComponent } from './componentes/listado/listado.component';
import { AbmUsuarioComponent } from './componentes/abm-usuario/abm-usuario.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'bienvenido', component: BienvenidoComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'listado', component: ListadoComponent },
  { path: 'abmUsuario', component: AbmUsuarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
