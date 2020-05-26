import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LfotosPageRoutingModule } from './lfotos-routing.module';

import { LfotosPage } from './lfotos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LfotosPageRoutingModule
  ],
  declarations: [LfotosPage]
})
export class LfotosPageModule {}
