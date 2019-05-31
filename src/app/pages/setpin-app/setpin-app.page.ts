import { Component, OnInit } from '@angular/core';
import { SetPinNumberOptions } from '../../interfaces/set-pin-number-options';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController, MenuController } from '@ionic/angular';
import { ScreenOrientation } from "@ionic-native/screen-orientation/ngx";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { BackendAPIService } from "../../services/backend-api.service";

@Component({
  selector: 'setpin-app',
  templateUrl: './setpin-app.page.html',
  styleUrls: ['./setpin-app.page.scss'],
})
export class SetpinAppPage implements OnInit {
  setpin: SetPinNumberOptions = {
    digit1: '',
    digit2: '',
    digit3: '',
    digit4: '',
  };

  group: any;

  private pinFormGroup: FormGroup;

  constructor(
    private router: Router,
    private menu: MenuController,
    private fBuilder: FormBuilder,
    private route: ActivatedRoute,
    private backend: BackendAPIService,
    private loadingController: LoadingController,
    private screenOrientation: ScreenOrientation
  ) {
    this.menu.enable(false);
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);

    this.route.queryParams.subscribe(params => {
      this.group = params;
    });

    this.pinFormGroup = this.fBuilder.group({});

    this.pinFormGroup.addControl('first_name', new FormControl(this.group['first_name']));
    this.pinFormGroup.addControl('last_name', new FormControl(this.group['last_name']));
    this.pinFormGroup.addControl('email', new FormControl(this.group['email']));
    this.pinFormGroup.addControl('phone', new FormControl(this.group['phone']));
    this.pinFormGroup.addControl('identity', new FormControl(this.group['identity']));
    this.pinFormGroup.addControl('username', new FormControl(this.group['username']));
    this.pinFormGroup.addControl('password', new FormControl(this.group['password']));
  }

  ngOnInit() {}

  jumpInput(d: any) {
    d.setFocus();
    if (d.name === 'd4' && this.setpin.digit4 !== '') {
      this.onPinComplete();
    }
  }

  onPinComplete() {
    const pin = String(this.setpin.digit1) + String(this.setpin.digit2) + String(this.setpin.digit3) +
    String(this.setpin.digit4);

    this.pinFormGroup.addControl('auth_pin', new FormControl(pin, Validators.required));
    this.backend.setpin({'auth_pin': pin }).subscribe(data =>{
      console.log('success pin');
      console.log(this.pinFormGroup.value);
      this.backend.register(this.pinFormGroup.value).subscribe(data=>{
        console.log('success register');
        this.presentLoading().then(() => {
          console.log(this.pinFormGroup.value);
          this.router.navigateByUrl('/terms');
        });
      }, err =>{
        console.log(err);
        alert(err['error']['detail'])
      })
    }, err =>{
      console.log(err);
      alert(err['error']['detail'])
    });
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      spinner: "crescent",
      duration: 2000,
      cssClass: 'my-loading-class'
    });
    loading.present();
    return await loading.onWillDismiss();
  }

  onBack() {
    this.router.navigateByUrl('/setpassword')
  }
}
