import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ModalController } from '@ionic/angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { ActivityDialogComponent } from '../../components/activity-dialog/activity-dialog.component'

@Component({
  selector: 'activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'],
})
export class ActivityPage implements OnInit {

  activities: Array<any> = [{type: String, amount: String, description: String, isClicked: Boolean}];

  constructor(
    private router: Router,
    private menu: MenuController,
    private modalCtrl: ModalController,
    private screenOrientation: ScreenOrientation
  ) {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    this.activities = [
      {
        type: 'Retiro',
        amount: '+$50.00 USD',
        description: 'Jacob E. Miller',
      },
      {
        type: 'Transferencia',
        amount: '+$1200.00 USD',
        description: 'Jacob E. Miller',
      },
      {
        type: 'Pago',
        amount: '+$1200.00 USD',
        description: 'Jacob E. Miller',
      },
      {
        type: 'Deposito',
        amount: '+$750.00 USD',
        description: 'Jacob E. Miller',
      },
    ];
  }

  ngOnInit() {
  }

  async openActivity() {
    const modal = await this.modalCtrl.create({
      component: ActivityDialogComponent,
      cssClass: 'my-modal-class',
    });
    modal.present();
  }


  onBack() {
    this.menu.enable(true);
    this.router.navigateByUrl('/account');
  }

}
