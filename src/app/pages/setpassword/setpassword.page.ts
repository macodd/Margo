import { Component, OnInit } from '@angular/core';

import { SetPasswordOptions } from '../../interfaces/set-password-options';
import { LoadingController, MenuController, Platform} from '@ionic/angular';
import { Router } from '@angular/router';
import { ScreenOrientation } from "@ionic-native/screen-orientation/ngx";
import { Validators, FormBuilder, FormGroup} from "@angular/forms";

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

  private userFormGroup: FormGroup;

  constructor(
    private router: Router,
    private platform: Platform,
    private menu: MenuController,
    private fBuilder: FormBuilder,
    private screenOrientation: ScreenOrientation,
    private loadingController: LoadingController
  ) {
    this.menu.enable(false);
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);

    this.userFormGroup = fBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      password2: ['', Validators.required],
    });
  }

  passwordType = 'password';
  password2Type = 'password';
  passwordIcon = 'eye-off';
  password2Icon = 'eye-off';

  ngOnInit() {}

  onSetPassword(data) {
    this.presentLoading().then(()=>{
      this.router.navigateByUrl('/setpin-app');
    });
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
