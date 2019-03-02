import { Component, ViewEncapsulation } from '@angular/core';
import { ModalController} from '@ionic/angular';
import { Router } from '@angular/router';
import { MakePaymentDialogPage } from '../make-payment-dialog/make-payment-dialog.page';

@Component({
  selector: 'make-payment',
  templateUrl: './make-payment.page.html',
  styleUrls: ['./make-payment.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MakePaymentPage {

  constructor(
    public modalCtrl: ModalController,
    public router: Router,
  ) { }

  async setFingerprint(data) {
    this.openModal();
  }
  async openModal() {
    const modal = await this.modalCtrl.create({
      component: MakePaymentDialogPage
      // componentProps: { excludedTracks: this.excludeTracks }
    });
    await modal.present();
  }

}
