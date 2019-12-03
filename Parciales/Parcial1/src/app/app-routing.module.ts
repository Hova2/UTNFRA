import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoPeliculasComponent } from './component/peliculas/listado-peliculas/listado-peliculas.component';
import { MostrarBusquedaComponent } from './component/mostrar-busqueda/mostrar-busqueda.component';
import { BienvenidoComponent } from './component/bienvenido/bienvenido.component';
import { AltaPeliculaComponent } from './component/peliculas/alta-pelicula/alta-pelicula.component';
import { AltaActorComponent } from './component/actor/alta-actor/alta-actor.component';
import { ListadoActoresComponent } from './component/actor/listado-actores/listado-actores.component';
import { ActorDetalleComponent } from './component/actor/actor-detalle/actor-detalle.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './component/login/login.component';
import { NexoSusApellidoComponenteComponent } from './component/nexo-sus-apellido-componente/nexo-sus-apellido-componente.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'bienvenido',
    component: BienvenidoComponent,
    data: { animation: 'Bienvenido' }
  },
  { path: 'login', component: LoginComponent, data: { animation: 'Login' } },
  { path: 'nexo', component: NexoSusApellidoComponenteComponent },
  { path: 'busqueda', component: MostrarBusquedaComponent },
  {
    path: 'peliculas',
    children: [
      {
        path: 'alta',
        component: AltaPeliculaComponent, canActivate: [AuthGuard]
      },
      { path: 'listado', component: ListadoPeliculasComponent }
    ]
  },
  {
    path: 'actor',
    children: [
      { path: 'alta', component: AltaActorComponent, canActivate: [AuthGuard]},
      { path: 'listado', component: ListadoActoresComponent },
      { path: 'actor_detalle', component: ActorDetalleComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
