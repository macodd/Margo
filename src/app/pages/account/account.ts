import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { AlertController, ToastController , MenuController} from '@ionic/angular';

import { UserData } from '../../services/user-data';


@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
  styleUrls: ['./account.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AccountPage implements AfterViewInit {
  username: string;
  coverImage: '#ffffff';

  constructor(
    public alertCtrl: AlertController,
    public router: Router,
    public userData: UserData,
    public toastController: ToastController,
    private menu: MenuController
  ) { }

  ngAfterViewInit() {
    this.menu.enable(true );
    this.getUsername();
    this.presentToastWithOptions();
  }

  updatePicture() {
    console.log('Clicked to update picture');
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

  // Present an alert with the current username populated
  // clicking OK will update the username and display it
  // clicking Cancel will close the alert and do nothing
  async changeUsername() {
    const alert = await this.alertCtrl.create({
      header: 'Change Username',
      buttons: [
        'Cancel',
        {
          text: 'Ok',
          handler: (data: any) => {
            this.userData.setUsername(data.username);
            this.getUsername();
          }
        }
      ],
      inputs: [
        {
          type: 'text',
          name: 'username',
          value: this.username,
          placeholder: 'username'
        }
      ]
    });
    await alert.present();
  }

  getUsername() {
    this.userData.getUsername().then((username) => {
      this.username = username;
    });
  }

  changePassword() {
    console.log('Clicked to change password');
  }

  logout() {
    this.userData.logout();
    this.router.navigateByUrl('/login');
  }
  goActivity() {
    this.router.navigateByUrl('/activity');
  }
  goSendMoney() {
    this.router.navigateByUrl('/send-money');
  }
  goMakePayment() {
    this.router.navigateByUrl('/make-payment');
  }

  clickUnlock() {
    this.router.navigateByUrl('/activity');
  }

  clickNotifications() {
    this.router.navigateByUrl('/notifications');
  }

}
