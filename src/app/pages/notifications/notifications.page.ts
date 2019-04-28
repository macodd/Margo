import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, MenuController } from '@ionic/angular';

import { NotificationDialogPage } from '../notification-dialog/notification-dialog.page';
import {ScreenOrientation} from "@ionic-native/screen-orientation/ngx";

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss']
})
export class NotificationsPage {

  notifications: Array<Object> = [{type: String, amount: String, description: String, isClicked: Boolean}];

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
        type: 'Cash In',
        amount: '+$50.00 USD',
        description: 'Jacob E. Miller',
        isClicked: false
      },
      {
        type: 'Send Money',
        amount: '+$1200.00 USD',
        description: 'Jacob E. Miller',
        isClicked: false
      },
      {
        type: 'Payment',
        amount: '+$1200.00 USD',
        description: 'Jacob E. Miller',
        isClicked: false
      },
      {
        type: 'Cash Out',
        amount: '+$750.00 USD',
        description: 'Jacob E. Miller',
        isClicked: false
      },
    ];
  }

  onClick(notification) {
    if (notification.isClicked == false) {
      notification.isClicked = true;
    }
  }

  async openNotification() {
    const modal = await this.modalCtrl.create({
      component: NotificationDialogPage,
      cssClass: 'my-modal-class',
    });
    modal.present();
    }

  onBack(){
    this.menu.enable(true);
    this.router.navigateByUrl('/account');
  }
}
