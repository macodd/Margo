import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from "@ionic/storage";
import { SendMoneyDialogComponent } from "../../components/send-money-dialog/send-money-dialog.component";
import { ScreenOrientation } from "@ionic-native/screen-orientation/ngx";

import { myEnterAnimation } from '../../animations/enter';
import { myLeaveAnimation } from '../../animations/leave';
import { BackendAPIService } from "../../services/backend-api.service";

@Component({
  selector: 'app-transfer-form',
  templateUrl: './transfer-form.page.html',
  styleUrls: ['./transfer-form.page.scss'],
})

export class TransferFormPage implements OnInit {

  image_member: any;
  firstname_member: string;
  lastname_member: string;
  username_member: string;

  user: string;
  balance: string;
  authToken: string;

  transferAction: string = 'transferir';
  amountToTransfer: any = '';
  amountShown: any = '0.00';


  constructor(
    private router: Router,
    private storage: Storage,
    private menu: MenuController,
    private modalCtrl: ModalController,
    private backend: BackendAPIService,
    private screenOrientation: ScreenOrientation
    ){
    this.menu.enable(false );
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);

    this.storage.get('image_member').then((val) => {
      this.image_member = val;
    });
    this.storage.get('firstname_member').then((val) => {
      this.firstname_member = val;
    });
    this.storage.get('lastname_member').then((val) => {
      this.lastname_member = val;
    });
    this.storage.get('username_member').then((val)=>{
      this.username_member = val;
    });
    this.storage.get('account_type_member').then((val)=>{
      if (String(val) == 'Business') {
        this.transferAction = 'Pagar'
      }
    });
    this.storage.get('user').then((val)=>{
      this.user = val;
    });
    this.storage.get('authToken').then((val)=>{
      this.authToken = val;
    });
    this.storage.get('balance').then((val)=>{
      this.balance = val;
    });
  }

  ngOnInit() {}

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

  goTransfer(event) {
    event.preventDefault();
    if (this.balance < this.amountShown){
      console.log('error')
    } else {
      this.toTransfer();
    }
  }


  async toTransfer() {
    const modal = await this.modalCtrl.create({
      component: SendMoneyDialogComponent,
      enterAnimation: myEnterAnimation,
      leaveAnimation: myLeaveAnimation,
      cssClass: 'second-modal-class',
      componentProps: {
        'name': this.firstname_member + ' ' + this.lastname_member,
        'transferAction': this.transferAction,
        'username': this.username_member,
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
