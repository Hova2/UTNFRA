import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CargaAlarmaPageRoutingModule } from './carga-alarma-routing.module';

import { CargaAlarmaPage } from './carga-alarma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CargaAlarmaPageRoutingModule
  ],
  declarations: [CargaAlarmaPage]
})
export class CargaAlarmaPageModule {}
