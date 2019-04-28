import { Component, OnInit } from '@angular/core';

import { SetPasswordOptions } from '../../interfaces/set-password-options';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { FingerprintAIO, FingerprintOptions } from '@ionic-native/fingerprint-aio/ngx';
import {ScreenOrientation} from "@ionic-native/screen-orientation/ngx";

@Component({
  selector: 'setpassword',
  templateUrl: './setpassword.page.html',
  styleUrls: ['./setpassword.page.scss'],
})
export class SetpasswordPage implements OnInit {

  setpassword: SetPasswordOptions = {
    username: '',
    password: '',
    password2: ''
  };
  submitted = false;

  constructor(
    private fingerprint: FingerprintAIO,
    private router: Router,
    private platform: Platform,
    private screenOrientation: ScreenOrientation
  ) {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }

  passwordType = 'password';
  password2Type = 'password';
  passwordIcon = 'eye-off';
  password2Icon = 'eye-off';

  ngOnInit() {}

  onSetPassword(data) {
    this.router.navigateByUrl('/terms');
  }

  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

  hideShowPassword2() {
    this.password2Type = this.password2Type === 'text' ? 'password' : 'text';
    this.password2Icon = this.password2Icon === 'eye-off' ? 'eye' : 'eye-off';
  }

  onBack() {
    this.router.navigateByUrl('/signup')
  }
}
