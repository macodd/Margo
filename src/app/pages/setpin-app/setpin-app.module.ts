import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SetpinAppPage } from './setpin-app.page';

const routes: Routes = [
  {
    path: '',
    component: SetpinAppPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SetpinAppPage]
})
export class SetpinAppPageModule {}
