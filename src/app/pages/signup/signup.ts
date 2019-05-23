import { Component, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController, MenuController } from '@ionic/angular';

import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import {ScreenOrientation} from "@ionic-native/screen-orientation/ngx";

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  styleUrls: ['./signup.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SignupPage {

  private userFormGroup: FormGroup;

  submitted = false;
  origin = '';

  constructor(
    private router: Router,
    private menu: MenuController,
    private fBuilder: FormBuilder,
    private route: ActivatedRoute,
    private loading: LoadingController,
    private screenOrientation: ScreenOrientation
  ) {
    this.route.queryParams.subscribe(params => {
        this.origin = params['origin'];
    });

    this.userFormGroup = fBuilder.group({
      fullname: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      userID: ['', Validators.required],
    });

    this.menu.enable(false);
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }

  onSignup(event) {
    this.submitted = true;
    console.log(this.userFormGroup.value);
    this.presentLoading().then(()=>{
      this.router.navigateByUrl('/setpassword');
    });
  }

  onLogin(){
    this.router.navigateByUrl('/login')
  }

  onBack(){
    if(this.origin === "account") {
      this.menu.enable(true);
      this.router.navigateByUrl('/account');
    }
    else {
      this.router.navigateByUrl('/tutorial')
    }
  }

  async presentLoading() {
    const load = await this.loading.create({
      duration: 2000,
      spinner: "crescent",
      cssClass: 'my-loading-class'
    });
    load.present();
    return await load.onWillDismiss();
  }
}
