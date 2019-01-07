import { Component, OnInit , ViewEncapsulation } from '@angular/core';
import { ModalController} from '@ionic/angular';
import { Router } from '@angular/router';
import { SendMoneyDialogPage } from '../send-money-dialog/send-money-dialog.page';
@Component({
  selector: 'send-money',
  templateUrl: './send-money.page.html',
  styleUrls: ['./send-money.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SendMoneyPage implements OnInit {
  excludeTracks: any;

  constructor(
    public modalCtrl: ModalController,
    public router: Router
    ) { }

  ngOnInit() {
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: SendMoneyDialogPage,
      componentProps: { excludedTracks: this.excludeTracks }
    });
    await modal.present();
  }
}
