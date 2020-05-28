import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SfotosPageRoutingModule } from './sfotos-routing.module';

import { SfotosPage } from './sfotos.page';

import { CosaslindasComponent } from 'src/app/components/cosaslindas/cosaslindas.component';
import { CosasfeasComponent } from 'src/app/components/cosasfeas/cosasfeas.component';
import { Camera } from '@ionic-native/camera/ngx';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, SfotosPageRoutingModule],
  declarations: [SfotosPage, CosaslindasComponent, CosasfeasComponent],
  providers: [Camera],
})
export class SfotosPageModule {}
