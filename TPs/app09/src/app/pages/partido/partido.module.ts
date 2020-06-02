import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartidoPageRoutingModule } from './partido-routing.module';

import { PartidoPage } from './partido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PartidoPageRoutingModule
  ],
  declarations: [PartidoPage]
})
export class PartidoPageModule {}
