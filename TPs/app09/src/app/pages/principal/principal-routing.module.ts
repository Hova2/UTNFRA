import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrincipalPage } from './principal.page';

const routes: Routes = [
  {
    path: '',
    component: PrincipalPage,
    children: [
      {
        path: 'partido',
        loadChildren: () =>
          import('../partido/partido.module').then((m) => m.PartidoPageModule),
      },
      {
        path: 'resultado',
        loadChildren: () =>
          import('../resultado/resultado.module').then(
            (m) => m.ResultadoPageModule
          ),
      },
      {
        path: 'foto-yvideo',
        loadChildren: () =>
          import('../foto-yvideo/foto-yvideo.module').then(
            (m) => m.FotoYVideoPageModule
          ),
      },
      {
        path: 'lista-partidos',
        loadChildren: () =>
          import('../lista-partidos/lista-partidos.module').then(
            (m) => m.ListaPartidosPageModule
          ),
      },
      {
        path: 'mejores-cinco',
        loadChildren: () =>
          import('../mejores-cinco/mejores-cinco.module').then(
            (m) => m.MejoresCincoPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrincipalPageRoutingModule {}
