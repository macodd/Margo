import { AfterViewInit, OnInit, Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

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
    // public alertCtrl: AlertController,
    public router: Router,
    public userData: UserData,
    public toastController: ToastController,
    private menu: MenuController
  ) {

  }

  ngOnInit() {
    this.menu.enable(true );
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

  // Present an alert with the current username populated
  // clicking OK will update the username and display it
  // clicking Cancel will close the alert and do nothing
  // async changeUsername() {
  //   const alert = await this.alertCtrl.create({
  //     header: 'Change Username',
  //     buttons: [
  //       'Cancel',
  //       {
  //         text: 'Ok',
  //         handler: (data: any) => {
  //           this.userData.setUsername(data.username);
  //           this.getUsername();
  //         }
  //       }
  //     ],
  //     inputs: [
  //       {
  //         type: 'text',
  //         name: 'username',
  //         value: this.username,
  //         placeholder: 'username'
  //       }
  //     ]
  //   });
  //   await alert.present();
  // }

  // getUsername() {
  //   this.userData.getUsername().then((username) => {
  //     this.username = username;
  //   });
  // }
}
