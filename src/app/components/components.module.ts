import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PinComponent } from './pin/pin.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { MiniUserDetailComponent } from './mini-user-detail/mini-user-detail.component';

@NgModule({
    imports: [
      CommonModule,
      IonicModule.forRoot(),
    ],
    declarations: [
        PinComponent,
        UserDetailComponent,
        MiniUserDetailComponent
    ],
    exports: [
        PinComponent,
        UserDetailComponent,
        MiniUserDetailComponent
    ],
    entryComponents: [],
  })
  export class ComponentsModule {}
