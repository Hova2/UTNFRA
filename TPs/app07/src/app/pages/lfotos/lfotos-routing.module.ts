import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LfotosPage } from './lfotos.page';

const routes: Routes = [
  {
    path: '',
    component: LfotosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LfotosPageRoutingModule {}
