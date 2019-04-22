import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

import { NotificationDialogPage } from '../notification-dialog/notification-dialog.page';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss']
})
export class NotificationsPage {

  notifications: Array<Object> = [{type: String, amount: String, description: String}];

  constructor(private router: Router, public modalCtrl: ModalController) {
    this.notifications = [
      {
        type: 'Cash In',
        amount: '+$50.00 USD',
        description: 'Jacob E. Miller'
      },
      {
        type: 'Send Money',
        amount: '+$1200.00 USD',
        description: 'Jacob E. Miller'
      },
      {
        type: 'Payment',
        amount: '+$1200.00 USD',
        description: 'Jacob E. Miller'
      },
      {
        type: 'Cash Out',
        amount: '+$750.00 USD',
        description: 'Jacob E. Miller'
      },
    ];
  }

  async openNotification() {
    const modal = await this.modalCtrl.create({
      component: NotificationDialogPage,
      cssClass: 'my-modal-class',
      // componentProps: { excludedTracks: this.excludeTracks }
    });
    modal.present();
    }

  onBack(){
    this.router.navigateByUrl('/account')
  }
}
