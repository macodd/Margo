import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ActivityPage } from './activity.page';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';

const routes: Routes = [
  {
    path: '',
    component: ActivityPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ActivityPage],
  providers: [FingerprintAIO]
})
export class ActivityPageModule {}
