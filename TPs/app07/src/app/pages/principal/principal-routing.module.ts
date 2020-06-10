import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrincipalPage } from './principal.page';

const routes: Routes = [
  {
    path: '',
    component: PrincipalPage,
    children: [
      {
        path: 'sfotos',
        loadChildren: () =>
          import('../sfotos/sfotos.module').then((m) => m.SfotosPageModule),
      },
      {
        path: 'mfotos',
        loadChildren: () =>
          import('../mfotos/mfotos.module').then((m) => m.MfotosPageModule),
      },
      {
        path: 'lfotos',
        loadChildren: () =>
          import('../lfotos/lfotos.module').then((m) => m.LfotosPageModule),
      },
      {
        path: 'graficos',
        loadChildren: () =>
          import('../graficos/graficos.module').then(
            (m) => m.GraficosPageModule
          ),
      },
    ],
    //redirectTo: 'sfotos',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrincipalPageRoutingModule {}
