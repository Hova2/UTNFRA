import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MejoresCincoPage } from './mejores-cinco.page';

const routes: Routes = [
  {
    path: '',
    component: MejoresCincoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MejoresCincoPageRoutingModule {}
