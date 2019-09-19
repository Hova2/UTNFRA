import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbmUsuarioComponent } from './componentes/abm-usuario/abm-usuario.component';
import { MaestroDetalleComponent } from './componentes/maestro-detalle/maestro-detalle.component';


const routes: Routes = [
  { path: '', redirectTo: 'maestroDesalle', pathMatch: 'full' },
  { path: 'abmUsuario', component: AbmUsuarioComponent },
  { path: 'maestroDesalle', component: MaestroDetalleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
