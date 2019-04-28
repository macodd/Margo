import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

import { ToastController , MenuController} from '@ionic/angular';

import { UserData } from '../../services/user-data';


@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
  styleUrls: ['./account.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AccountPage implements AfterViewInit {
  username: string;

  constructor(
    public router: Router,
    public userData: UserData,
    public toastController: ToastController,
    private menu: MenuController,
    private screenOrientation: ScreenOrientation
  ) {
    this.menu.enable(true );
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }

  ngAfterViewInit() {
    // this.getUsername();
    this.presentToastWithOptions();
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      duration: 2000,
      message: 'You have $88,76 left this month',
      position: 'top',
      cssClass: 'toastStyle'
    });
    toast.present();
  }

  logout() {
    this.userData.logout();
    this.router.navigateByUrl('/login');
  }

  goActivity() {
    this.router.navigateByUrl('/activity');
  }

  goSendMoney() {
    this.router.navigateByUrl('/transfer');
  }

  goBalance() {
    this.router.navigateByUrl('/balance');
  }

  clickUnlock() {
    this.router.navigateByUrl('/subscribe');
  }

  clickNotifications() {
    this.router.navigateByUrl('/notifications');
  }

}
