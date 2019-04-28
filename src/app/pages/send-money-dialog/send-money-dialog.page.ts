import { Component, AfterViewInit} from '@angular/core';
import { LoadingController, ModalController} from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'send-money-dialog',
  templateUrl: './send-money-dialog.page.html',
  styleUrls: ['./send-money-dialog.page.scss'],
})
export class SendMoneyDialogPage implements AfterViewInit {

  constructor(
    public modalCtrl: ModalController,
    private router: Router,
    private loadingController: LoadingController
  ) {}

  ngAfterViewInit(): void {
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and pass back data
    this.modalCtrl.dismiss();
  }

  goSuccessful() {
    this.dismiss();
    this.presentLoading().then(()=>{
      this.router.navigateByUrl('payment-successful');
    });
  }

  goCancel() {
    this.dismiss();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      duration: 2000,
      spinner: "crescent",
      cssClass: 'my-loading-class'
    });
    loading.present();
    return await loading.onWillDismiss();
  }
}
