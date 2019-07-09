import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

import { ToastController , MenuController} from '@ionic/angular';

import { UserData } from '../../services/user-data';
import { Storage } from "@ionic/storage";

@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
  styleUrls: ['./account.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AccountPage implements AfterViewInit {

  first_name;
  last_name;
  username;
  account_type;
  balance;
  image;

  constructor(
    private router: Router,
    private userData: UserData,
    private storage: Storage,
    private toastController: ToastController,
    private menu: MenuController,
    private screenOrientation: ScreenOrientation
  ) {
    this.menu.enable(true );
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);

    this.storage.get('first_name_user').then(val=>{this.first_name = val});
    this.storage.get('last_name_user').then(val=>{this.last_name = val});
    this.storage.get('username_user').then(val=>{this.username = val});
    this.storage.get('account_type_user').then(val=>{this.account_type = val});
    this.storage.get('image_user').then(val=>{this.image = val});
  }

  ionViewWillEnter(){
    this.storage.get('balance_user').then(val=>{ this.balance = val });
  }

  ngAfterViewInit() {
    this.menu.enable(true );
    this.presentToastWithOptions();
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      duration: 2000,
      message: 'Te quedan $88,76 este mes',
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
    const navigationExtras: NavigationExtras = {
      queryParams: {'origin': 'account'}
    };
    this.router.navigate(['subscribe'], navigationExtras);
  }

  clickNotifications() {
    this.router.navigateByUrl('/notifications');
  }

}
