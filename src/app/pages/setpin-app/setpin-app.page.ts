import { Component, OnInit } from '@angular/core';
import { SetPinNumberOptions } from '../../interfaces/set-pin-number-options';
import { Router } from '@angular/router';
import { LoadingController, MenuController } from '@ionic/angular';
import { ScreenOrientation } from "@ionic-native/screen-orientation/ngx";

@Component({
  selector: 'setpin-app',
  templateUrl: './setpin-app.page.html',
  styleUrls: ['./setpin-app.page.scss'],
})
export class SetpinAppPage implements OnInit {
  setpinnumber: SetPinNumberOptions = {
    digit1: '',
    digit2: '',
    digit3: '',
    digit4: '',
  };

  constructor(
    public router: Router,
    public loadingController: LoadingController,
    private menu: MenuController,
    private screenOrientation: ScreenOrientation
  ) {
    this.menu.enable(false);
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }

  ngOnInit() {}

  jumpInput(d: any) {
    d.setFocus();
    if (d.name === 'd4' && this.setpinnumber.digit4 !== '') {
      this.presentLoading().then(() => {
        this.router.navigateByUrl('/terms');
      });
    }
  }

  onPinComplete() {
    // This the pin number
    const pin = this.setpinnumber.digit1 + this.setpinnumber.digit2 + this.setpinnumber.digit3 +
    this.setpinnumber.digit4;
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
