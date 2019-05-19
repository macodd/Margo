import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { SendMoneyDialogPage } from '../send-money-dialog/send-money-dialog.page';
import { ScreenOrientation } from "@ionic-native/screen-orientation/ngx";

import { myEnterAnimation } from '../../animations/enter';
import { myLeaveAnimation } from '../../animations/leave';

@Component({
  selector: 'app-transfer-form',
  templateUrl: './transfer-form.page.html',
  styleUrls: ['./transfer-form.page.scss'],
})

export class TransferFormPage implements OnInit {

  amountToTransfer: any = '';
  amountShown: any = '0.00';

  constructor(
    private router: Router,
    private menu: MenuController,
    private modalCtrl: ModalController,
    private screenOrientation: ScreenOrientation
    ){
    this.menu.enable(false );
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }

  ngOnInit() {
  }

  handleInput(num: any) {

    if (num === 'd'){
      var str = this.amountToTransfer;
      this.amountToTransfer = str.slice(0, -1);
    }
    else {
      this.amountToTransfer += num;
    }
    const amount = this.amountToTransfer;
    const show = Number(amount)/100;
    this.amountShown = String(show.toFixed(2));
  }


  goTransfer(){
    var num = Number(this.amountToTransfer);
    if (num <= 0){
      console.log('notification of invalid input')
    } else {
      this.toTransfer();
    }

  }

  async toTransfer() {
    const modal = await this.modalCtrl.create({
      component: SendMoneyDialogPage,
      enterAnimation: myEnterAnimation,
      leaveAnimation: myLeaveAnimation,
      cssClass: 'second-modal-class',
      componentProps: {
        'name': 'Mark',
        'amount': this.amountShown
      }
    });
    await modal.present();
  }


  onBack() {
    this.menu.enable(true);
    this.router.navigateByUrl('/transfer')
  }
}
