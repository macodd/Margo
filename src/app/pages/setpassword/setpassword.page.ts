import { Component, OnInit } from '@angular/core';

import { SetPasswordOptions } from '../../interfaces/set-password-options';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { FingerprintAIO, FingerprintOptions } from '@ionic-native/fingerprint-aio/ngx';

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

  constructor(private fingerprint: FingerprintAIO, private router: Router, private platform: Platform) { }

  ngOnInit() {
  }

  onSetPassword(data) {
    this.router.navigateByUrl('/setpin-app');
  }
}
