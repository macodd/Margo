import { Component, ViewEncapsulation } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

import { Validators, FormBuilder, FormGroup } from '@angular/forms';
// import { Storage } from '@ionic/storage';

import { UserData } from '../../services/user-data';

import { LoadingController, Platform, MenuController } from '@ionic/angular';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginPage {

  origin: String = '';
  submitted = false;
  private userFormGroup: FormGroup;

  constructor(
    private userData: UserData,
    private router: Router,
    // private storage: Storage,
    private fBuilder: FormBuilder,
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

    this.userFormGroup = fBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin(event) {
    this.submitted = true;

    this.userFormGroup.reset();
    this.presentLoading().then(() => {
      this.router.navigateByUrl('/auth-pin');
    });

  }

  goTutorial(){
    this.router.navigateByUrl('/tutorial');
  }

  onHelp(){
    this.router.navigateByUrl('/help');
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
