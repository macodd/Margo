import { Component, AfterViewInit} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'send-money-dialog',
  templateUrl: './send-money-dialog.page.html',
  styleUrls: ['./send-money-dialog.page.scss'],
})
export class SendMoneyDialogPage implements AfterViewInit {

  constructor(
    public modalCtrl: ModalController,
    private router: Router
  ) {}

  ngAfterViewInit(): void {
  }

  dismiss(data?: any) {
    // using the injected ModalController this page
    // can "dismiss" itself and pass back data
    this.modalCtrl.dismiss(data);
  }

  goSuccessful() {
    this.dismiss();
    this.router.navigateByUrl('payment-successful');
  }
}
