import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FotoYVideoPageRoutingModule } from './foto-yvideo-routing.module';

import { FotoYVideoPage } from './foto-yvideo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FotoYVideoPageRoutingModule
  ],
  declarations: [FotoYVideoPage]
})
export class FotoYVideoPageModule {}
