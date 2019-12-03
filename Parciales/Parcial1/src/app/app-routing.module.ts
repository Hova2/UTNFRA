import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoPeliculasComponent } from './component/peliculas/listado-peliculas/listado-peliculas.component';
import { MostrarBusquedaComponent } from './component/mostrar-busqueda/mostrar-busqueda.component';
import { BienvenidoComponent } from './component/bienvenido/bienvenido.component';
import { AltaPeliculaComponent } from './component/peliculas/alta-pelicula/alta-pelicula.component';
import { AltaActorComponent } from './component/actor/alta-actor/alta-actor.component';
import { ListadoActoresComponent } from './component/actor/listado-actores/listado-actores.component';
import { ActorDetalleComponent } from './component/actor/actor-detalle/actor-detalle.component';


const routes: Routes = [
  { path: '', component: BienvenidoComponent },
  { path: 'busqueda', component: MostrarBusquedaComponent },
  { path: 'peliculas', children: [
    { path: 'alta', component: AltaPeliculaComponent },
    { path: 'listado', component: ListadoPeliculasComponent }
   ]},
   { path: 'actor', children: [
    { path: 'alta', component: AltaActorComponent },
    { path: 'listado', component: ListadoActoresComponent },
    { path: 'actor_detalle', component: ActorDetalleComponent }
   ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
