import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PaymentSuccessfulPage } from './payment-successful.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentSuccessfulPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PaymentSuccessfulPage]
})
export class PaymentSuccessfulPageModule {}
