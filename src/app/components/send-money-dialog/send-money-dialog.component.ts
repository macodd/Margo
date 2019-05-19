import {Component, Input, AfterViewInit} from '@angular/core';
import {LoadingController, MenuController, ModalController} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-send-money-dialog',
  templateUrl: './send-money-dialog.component.html',
  styleUrls: ['./send-money-dialog.component.scss'],
})
export class SendMoneyDialogComponent implements AfterViewInit {

  @Input() name: string;
  @Input() amount: string;

  constructor(
    public modalCtrl: ModalController,
    private router: Router,
    private menu: MenuController,
    private loadingController: LoadingController
  ) {
    this.menu.enable(false);
  }

  ngAfterViewInit(): void {
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and pass back data
    this.modalCtrl.dismiss();
  }

  goSuccessful() {
    this.dismiss();
    this.router.navigateByUrl('/sending-screen');
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
