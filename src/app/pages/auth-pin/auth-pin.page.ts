<<<<<<< HEAD
import { Component, OnInit} from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> b33ec6ad6011a4002a7e9b007e1e115ca870240c
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'auth-pin',
  templateUrl: './auth-pin.page.html',
<<<<<<< HEAD
  styleUrls: ['./auth-pin.page.scss']
})
export class AuthPinPage implements OnInit {

  constructor(
    public router: Router,
    public loadingController: LoadingController,
  ){}
  ngOnInit(): void {
  }
  
  Pin: String ="";
  ShowPin: Boolean = true;
  ShowPinRepeat: Boolean = false;
  
  eventCapture(event) {
    this.presentLoading().then(()=>{
      this.togglePinRepeat();
    });
  }

  eventCaptureRepeat(event) {
    this.presentLoading().then(()=>{
        this.router.navigateByUrl('/setpassword');
    });
  }
  togglePin() {
    this.ShowPin = !this.ShowPin;
  }
  togglePinRepeat() {
    this.ShowPin = !this.ShowPin;
    this.ShowPinRepeat = !this.ShowPinRepeat;
=======
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
>>>>>>> b33ec6ad6011a4002a7e9b007e1e115ca870240c
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
