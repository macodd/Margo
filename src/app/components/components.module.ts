import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ActivityDialogComponent } from './activity-dialog/activity-dialog.component';
import { NotificationDialogComponent} from './notification-dialog/notification-dialog.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { MiniUserDetailComponent } from './mini-user-detail/mini-user-detail.component';
import { SendMoneyDialogComponent } from './send-money-dialog/send-money-dialog.component';
import { SendingScreenComponent } from './sending-screen/sending-screen.component';

@NgModule({
    imports: [
      CommonModule,
      IonicModule.forRoot(),
    ],
    declarations: [
      UserDetailComponent,
      MiniUserDetailComponent,
      ActivityDialogComponent,
      NotificationDialogComponent,
      SendMoneyDialogComponent,
      SendingScreenComponent
    ],
    exports: [
      UserDetailComponent,
      MiniUserDetailComponent,
      ActivityDialogComponent,
      NotificationDialogComponent,
      SendMoneyDialogComponent,
      SendingScreenComponent
    ],
    entryComponents: [ActivityDialogComponent, NotificationDialogComponent, SendingScreenComponent, SendMoneyDialogComponent],
  })

  export class ComponentsModule {}
