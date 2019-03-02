import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MakePaymentDialogPage } from './make-payment-dialog.page';

const routes: Routes = [
  {
    path: '',
    component: MakePaymentDialogPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MakePaymentDialogPage]
})
export class MakePaymentDialogPageModule {}
