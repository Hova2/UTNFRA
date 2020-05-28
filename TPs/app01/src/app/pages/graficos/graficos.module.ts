import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GraficosPageRoutingModule } from './graficos-routing.module';

import { GraficosPage } from './graficos.page';
import { ChartModule } from 'primeng/chart';
import { OverlayPanelModule } from 'primeng/overlaypanel';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GraficosPageRoutingModule,
    ChartModule,
    OverlayPanelModule,
  ],
  declarations: [GraficosPage],
})
export class GraficosPageModule {}
