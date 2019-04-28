import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router , ActivatedRoute} from '@angular/router';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

import { UserData } from '../../services/user-data';

import { LoginOptions } from '../../interfaces/login-options';
import { LoadingController, Platform, MenuController } from '@ionic/angular';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginPage {
  login: LoginOptions = { email: '', password: '' };
  origin: String = '';
  submitted = false;

  constructor(
    private userData: UserData,
    private router: Router,
    private loadingController: LoadingController,
    private platform: Platform,
    private route: ActivatedRoute,
    private menu: MenuController,
    private screenOrientation: ScreenOrientation
    ) {
    this.route.queryParams.subscribe(params => {
        this.origin = params['origin'];
    });
    this.menu.enable(false);
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.presentLoading().then(() => {
        this.router.navigateByUrl('/auth-pin');
      });
    }
  }

  goTutorial(){
    this.router.navigateByUrl('/tutorial');
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

}
