import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CargaAlarmaPage } from './carga-alarma.page';

const routes: Routes = [
  {
    path: '',
    component: CargaAlarmaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CargaAlarmaPageRoutingModule {}
