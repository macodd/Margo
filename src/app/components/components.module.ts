import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PinComponent } from './pin/pin.component';

@NgModule({
    imports: [
      CommonModule,
      IonicModule.forRoot(),
    ],
    declarations: [
        PinComponent
    ],
    exports: [
        PinComponent
    ],
    entryComponents: [],
  })
  export class ComponentsModule {}