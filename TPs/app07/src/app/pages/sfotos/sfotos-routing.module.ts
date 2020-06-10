import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SfotosPage } from './sfotos.page';

const routes: Routes = [
  {
    path: '',
    component: SfotosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SfotosPageRoutingModule {}
