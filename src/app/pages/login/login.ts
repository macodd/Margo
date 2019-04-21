import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router , ActivatedRoute} from '@angular/router';

import { UserData } from '../../services/user-data';

import { LoginOptions } from '../../interfaces/login-options';
import { LoadingController, Platform, MenuController } from '@ionic/angular';

// import { FingerprintAIO } from "@ionic-native/fingerprint-aio/ngx";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginPage {
  login: LoginOptions = { email: '', password: '' };
  origin: String = '';
  some: string;
  submitted = false;

  constructor(
    // private faio: FingerprintAIO,
    private userData: UserData,
    private router: Router,
    private loadingController: LoadingController,
    private platform: Platform,
    private route: ActivatedRoute,
    private menu: MenuController
    ) {
    this.route.queryParams.subscribe(params => {
        this.origin = params['origin'];
    });
    this.menu.enable(false)
  }

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.presentLoading().then(() => {
        this.router.navigateByUrl('/account');
      });
    }
  }

  onSignup() {
   this.router.navigateByUrl('/signup');
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: this.some,
      duration: 2000
    });
    loading.present();
    return await loading.onWillDismiss();
  }

  onBack(){
    if(this.origin === "account")
      this.router.navigateByUrl('/account');
    else 
      this.router.navigateByUrl('/tutorial')
  }

  // async presentDialogue() {
  //   try {
  //     await this.platform.ready();
  //     this.faio.isAvailable().then(result => {
  //       if (result === "finger" || result === "face") {
  //         this.faio.show({
  //           clientId: 'Fingerprint-Demo',
  //           clientSecret: 'password', //Only necessary for Android
  //           disableBackup: true,  //Only for Android(optional)
  //           localizedFallbackTitle: 'Use Pin', //Only for iOS
  //           localizedReason: 'Please authenticate' //Only for iOS
  //         }).then((result: any) => {
  //           this.router.navigateByUrl('/account')
  //         }).catch(error => {
  //           console.log(error)
  //         })
  //       }
  //     })
  //   }catch(err){
  //     console.log(err)
  //   }
  // }

}
