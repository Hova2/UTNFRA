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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrincipalPageRoutingModule {}
