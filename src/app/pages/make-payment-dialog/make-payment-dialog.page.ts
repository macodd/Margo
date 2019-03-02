import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'make-payment-dialog',
  templateUrl: './make-payment-dialog.page.html',
  styleUrls: ['./make-payment-dialog.page.scss'],
})
export class MakePaymentDialogPage implements AfterViewInit {

  constructor(
    public modalCtrl: ModalController,
    private router: Router
  ) { }

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
