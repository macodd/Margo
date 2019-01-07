import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SetpasswordPage } from './setpassword.page';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
const routes: Routes = [
  {
    path: '',
    component: SetpasswordPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SetpasswordPage],
  providers: [FingerprintAIO]
})
export class SetpasswordPageModule {}
