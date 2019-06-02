import { Component, Input, AfterViewInit } from '@angular/core';
import { LoadingController, MenuController, ModalController } from "@ionic/angular";
import { Router} from "@angular/router";
import { Storage } from "@ionic/storage";
import { myEnterAnimation } from "../../animations/enter";
import { myLeaveAnimation } from "../../animations/leave";

import { SendingScreenComponent } from "../sending-screen/sending-screen.component";
import { BackendAPIService } from "../../services/backend-api.service";

@Component({
  selector: 'app-send-money-dialog',
  templateUrl: './send-money-dialog.component.html',
  styleUrls: ['./send-money-dialog.component.scss'],
})
export class SendMoneyDialogComponent implements AfterViewInit {

  @Input() name: string;
  @Input() username: string;
  @Input() amount: string;
  @Input() transferAction: string;

  user: any;
  balance: any;

  constructor(
    private router: Router,
    private storage: Storage,
    private menu: MenuController,
    private backend: BackendAPIService,
    private modalCtrl: ModalController,
    private loadingController: LoadingController
  ) {
    this.menu.enable(false);

    this.storage.get('user').then(val =>{
      this.user = val
    });
  }

  ngAfterViewInit(): void {
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  goSuccessful() {
    this.dismiss();
    this.toTransfer().then(() =>{
      this.backend.transfer({'to_user': this.username, 'amount': Number(this.amount)}).subscribe(()=>{
        console.log('success');
        this.backend.get('profiles/' + String(this.user), true).subscribe(data => {
          console.log(data['profile']['balance']);
          this.storage.set('balance', data['profile']['balance']);
          this.dismiss();
          this.router.navigateByUrl('/payment-successful')
          })
        })
      }, err=>{
        console.log(err);
        alert(err['error']['detail']);
        this.router.navigateByUrl('/transfer-form')
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
