import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { AccountPage } from './account';
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: AccountPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    AccountPage,
  ]
})
export class AccountModule { }
