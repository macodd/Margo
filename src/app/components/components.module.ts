import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { MiniUserDetailComponent } from './mini-user-detail/mini-user-detail.component';

@NgModule({
    imports: [
      CommonModule,
      IonicModule.forRoot(),
    ],
    declarations: [
      UserDetailComponent,
      MiniUserDetailComponent,

    ],
    exports: [
      UserDetailComponent,
      MiniUserDetailComponent,

    ],
    entryComponents: [],
  })
  export class ComponentsModule {}
