import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MfotosPageRoutingModule } from './mfotos-routing.module';

import { MfotosPage } from './mfotos.page';
import { OverlayPanelModule } from 'primeng/overlaypanel';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MfotosPageRoutingModule,
    OverlayPanelModule,
  ],
  declarations: [MfotosPage],
})
export class MfotosPageModule {}
