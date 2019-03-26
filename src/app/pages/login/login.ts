import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router , ActivatedRoute} from '@angular/router';

import { UserData } from '../../providers/user-data';

import { LoginOptions } from '../../interfaces/login-options';
import { LoadingController, Platform } from '@ionic/angular';


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
  TIME_IN_MS = 5000;

  constructor(
    public userData: UserData,
    public router: Router,
    public loadingController: LoadingController,
    public platform: Platform,
    public route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(params => {
        this.origin = params['origin'];
    });
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
      spinner: 'crescent',
      translucent: true,
      duration: 2000
    });
    loading.present();
    return await loading.onWillDismiss();
  }

  onBack() {
    if (this.origin === 'account') {
      this.router.navigateByUrl('/account');
    } else {
      this.router.navigateByUrl('/tutorial');
    }
  }
}
