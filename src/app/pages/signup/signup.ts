import { Component, ViewEncapsulation } from '@angular/core';
import {Router, ActivatedRoute, NavigationExtras} from '@angular/router';
import { LoadingController, MenuController } from '@ionic/angular';

import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { ScreenOrientation} from "@ionic-native/screen-orientation/ngx";
import { BackendAPIService } from "../../services/backend-api.service";


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  styleUrls: ['./signup.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SignupPage {

  private userFormGroup: FormGroup;

  origin = '';

  constructor(
    private router: Router,
    private backend: BackendAPIService,
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
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      identity: ['', Validators.required],
    });

    this.menu.enable(false);
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }

  onSignup(event) {
    event.preventDefault();
    this.presentLoading().then(()=> {
      this.backend.signup(this.userFormGroup.value).subscribe((data) => {
        console.log("success");
        const navigationExtras: NavigationExtras = {
          queryParams: this.userFormGroup.value
        };
        this.router.navigate(['setpassword'], navigationExtras);
      }, error =>{
        console.log(error);
        alert(error['error']['detail']);
      } );
    })
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
