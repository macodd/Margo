import { Component, OnInit } from '@angular/core';
import { SetPinNumberOptions } from '../../interfaces/set-pin-number-options';
import { Router } from '@angular/router';
import { LoadingController, MenuController } from '@ionic/angular';
import { ScreenOrientation } from "@ionic-native/screen-orientation/ngx";
import { FormBuilder, FormGroup } from "@angular/forms";

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

  private pinFormGroup: FormGroup;

  constructor(
    public router: Router,
    private fBuilder: FormBuilder,
    private menu: MenuController,
    public loadingController: LoadingController,
    private screenOrientation: ScreenOrientation
  ) {
    this.menu.enable(false);
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);

  }

  ngOnInit() {}

  jumpInput(d: any) {
    d.setFocus();
    if (d.name === 'd4' && this.setpin.digit4 !== '') {
      this.presentLoading().then(() => {
        this.router.navigateByUrl('/terms');
      });
    }
  }

  onPinComplete() {
    const pin = this.setpin.digit1 + this.setpin.digit2 + this.setpin.digit3 +
    this.setpin.digit4;

    this.pinFormGroup = this.fBuilder.group({
      pin: [pin],
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
