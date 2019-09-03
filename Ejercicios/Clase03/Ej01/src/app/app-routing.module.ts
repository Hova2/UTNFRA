import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadodeusuarioComponent } from './componentes/listadodeusuario/listadodeusuario.component';
import { AbmusuarioComponent } from './componentes/abmusuario/abmusuario.component';


const routes: Routes = [
  { path: 'listadodeusuarios', component: ListadodeusuarioComponent },
  { path: 'abmusuarios', component: AbmusuarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
