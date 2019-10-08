import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoPeliculasComponent } from './component/listado-peliculas/listado-peliculas.component';
import { MostrarBusquedaComponent } from './component/mostrar-busqueda/mostrar-busqueda.component';


const routes: Routes = [
  { path: '', component: ListadoPeliculasComponent },
  { path: 'buscarpelicula', component: MostrarBusquedaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
