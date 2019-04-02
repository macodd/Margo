import { Component, OnInit, ViewChild } from '@angular/core';
import { SetPinNumberOptions } from '../../interfaces/set-pin-number-options';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

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
    digit5: '',
    digit6: ''
  };
  submitted = false;

  constructor(
    public router: Router,
    public loadingController: LoadingController
  ) { }

  ngOnInit() {
  }
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
    this.setpinnumber.digit4 + this.setpinnumber.digit5 + this.setpinnumber.digit6;
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      spinner: 'crescent',
      duration: 1000,
      cssClass: 'my-loading-class'
    });
    loading.present();
    return await loading.onWillDismiss();
  }
}
