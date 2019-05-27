import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TutorialPage } from './tutorial';
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: TutorialPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TutorialPage],
  entryComponents: [TutorialPage],
})
export class TutorialModule {}
