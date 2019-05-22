import { Component, Input, AfterViewInit } from '@angular/core';
import { LoadingController, MenuController, ModalController } from "@ionic/angular";
import { Router } from "@angular/router";
import { myEnterAnimation } from "../../animations/enter";
import { myLeaveAnimation } from "../../animations/leave";

import { SendingScreenComponent } from "../sending-screen/sending-screen.component";

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
    this.toTransfer().then(() =>{
      let dismissPage = setTimeout(()=>{
        this.dismiss();
      }, 7000);
      this.router.navigateByUrl('/payment-successful')
    })
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

  async toTransfer() {
    const modal = await this.modalCtrl.create({
      component: SendingScreenComponent,
      enterAnimation: myEnterAnimation,
      leaveAnimation: myLeaveAnimation,
      cssClass: 'second-modal-class',
    });
    await modal.present();
  }

}
