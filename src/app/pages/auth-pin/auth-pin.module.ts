<<<<<<< HEAD
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
=======
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
>>>>>>> b33ec6ad6011a4002a7e9b007e1e115ca870240c
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AuthPinPage } from './auth-pin.page';
import { ComponentsModule } from '../../components/components.module';

<<<<<<< HEAD
=======

>>>>>>> b33ec6ad6011a4002a7e9b007e1e115ca870240c
const routes: Routes = [
  {
    path: '',
    component: AuthPinPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [AuthPinPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AuthPinPageModule {}
