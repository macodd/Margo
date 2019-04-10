import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'auth-pin',
  templateUrl: './auth-pin.page.html',
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
