import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { LoginOptions } from '../../interfaces/login-options';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginPage {
  login: LoginOptions = { email: '', password: '' };
  submitted = false;
  TIME_IN_MS = 5000;

  constructor(
    public userData: UserData,
    public router: Router,
    public loadingController: LoadingController
  ) { }

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
      message: 'Please wait...',
      duration: 2000
    });
    loading.present();
    return await loading.onWillDismiss();
  }
}
