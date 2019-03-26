import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'auth-pin',
  templateUrl: './auth-pin.page.html',
  styleUrls: ['./auth-pin.page.scss'],
})
export class AuthPinPage implements OnInit {

  Pin: String = '';
  ShowPin: Boolean = true;
  constructor(
    public router: Router,
    public loadingController: LoadingController,
  ) { }

  ngOnInit(): void {
  }
  eventCapture(event) {
    this.presentLoading().then(() => {
      this.router.navigateByUrl('/setpassword');
    });
  }

  showPin() {
    this.ShowPin = !this.ShowPin;
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 2000
    });
    loading.present();
    return await loading.onWillDismiss();
  }
}
