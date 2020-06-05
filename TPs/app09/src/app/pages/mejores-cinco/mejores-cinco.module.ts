import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MejoresCincoPageRoutingModule } from './mejores-cinco-routing.module';

import { MejoresCincoPage } from './mejores-cinco.page';
import { ChartModule } from 'primeng/chart';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MejoresCincoPageRoutingModule,
    ChartModule,
  ],
  declarations: [MejoresCincoPage],
})
export class MejoresCincoPageModule {}
