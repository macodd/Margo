import { Component, ViewEncapsulation } from '@angular/core';
import { ModalController, Platform} from '@ionic/angular';
import { Router } from '@angular/router';
import { SendMoneyDialogPage } from '../send-money-dialog/send-money-dialog.page';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';

@Component({
  selector: 'send-money',
  templateUrl: './send-money.page.html',
  styleUrls: ['./send-money.page.scss'],
  encapsulation: ViewEncapsulation.None
})

export class SendMoneyPage {
  // excludeTracks: any;

  constructor(
    public modalCtrl: ModalController,
    public router: Router,
    private platform: Platform,
    private fingerprint: FingerprintAIO
    ) { }

  async setFingerprint(data) {
    /*** FINGERPRINT AIO ***/
  try {
      await this.platform.ready();
      const available = await this.fingerprint.isAvailable();
      console.log(available);
      if (available === 'finger' || available === 'face') {
        this.fingerprint.show({
          clientId: 'ionic-conference-app',
          clientSecret: 'password',
          disableBackup: false
        })
        .then((result: any) => {
          console.log(result);
          this.openModal();
        })
        .catch((error: any) => {
          console.log(error);
        });
      }
  } catch (e) {
    console.error(e);
  }
}

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: SendMoneyDialogPage
      // componentProps: { excludedTracks: this.excludeTracks }
    });
    await modal.present();
  }

}
