import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MfotosPage } from './mfotos.page';

const routes: Routes = [
  {
    path: '',
    component: MfotosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MfotosPageRoutingModule {}
