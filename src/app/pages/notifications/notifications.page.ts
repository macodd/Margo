import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, MenuController } from '@ionic/angular';

import { NotificationDialogComponent } from "../../components/notification-dialog/notification-dialog.component";
import { ScreenOrientation } from "@ionic-native/screen-orientation/ngx";

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss']
})
export class NotificationsPage {

  notifications: Array<any> = [{type: String, amount: String, name: String, isClicked: Boolean}];

  constructor(
    private router: Router,
    public modalCtrl: ModalController,
    private menu: MenuController,
    private screenOrientation: ScreenOrientation
  ) {
    this.menu.enable(false);
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    this.notifications = [
      {
        type: 'Enviado',
        amount: '+$50.00 USD',
        name: 'Jacob E. Miller',
        date: '6:18 AM, 15-DEC-2018',
        orderNo: '5E37DETHR8',
        isClicked: false
      },
      {
        type: 'Deposito',
        amount: '+$1200.00 USD',
        name: 'Ronald',
        date: '6:18 AM, 15-DEC-2018',
        orderNo: '5E37DETHR8',
        isClicked: false
      },
      {
        type: 'Pago',
        amount: '+$1200.00 USD',
        name: 'Gabriel',
        date: '6:18 AM, 15-DEC-2018',
        orderNo: '5E37DETHR8',
        isClicked: false
      },
      {
        type: 'Transferencia',
        amount: '+$750.00 USD',
        name: 'Mark',
        date: '6:18 AM, 15-DEC-2018',
        orderNo: '5E37DETHR8',
        isClicked: false
      },
    ];
  }

  onClick(notification) {
    if (notification.isClicked == false) {
      notification.isClicked = true;
    }
  }

  async openNotification(notification: any) {
    const modal = await this.modalCtrl.create({
      component: NotificationDialogComponent,
      cssClass: 'my-modal-class',
      componentProps: {
        'type': notification.type,
        'amount': notification.amount,
        'name': notification.name,
        'date': notification.date,
        'orderNo': notification.orderNo,
      }
    });
    modal.present();
  }

  onBack(){
    this.menu.enable(true);
    this.router.navigateByUrl('/account');
  }
}
