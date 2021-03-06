import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SendMoneyPage } from './send-money.page';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';

const routes: Routes = [
  {
    path: '',
    component: SendMoneyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SendMoneyPage],
  providers: [FingerprintAIO]
})
export class SendMoneyPageModule {}
