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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrincipalPageRoutingModule {}
