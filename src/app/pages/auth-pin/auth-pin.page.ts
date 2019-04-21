import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, MenuController } from '@ionic/angular';

@Component({
  selector: 'auth-pin',
  templateUrl: './auth-pin.page.html',
  styleUrls: ['./auth-pin.page.scss']
})
export class AuthPinPage implements OnInit {

  constructor(
    private router: Router,
    private loadingController: LoadingController,
    private menu: MenuController
  ){}

  ngOnInit() {
    this.menu.enable(false)
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
      duration: 1000
    });
    loading.present();
    return await loading.onWillDismiss();
  }

  onBack() {
    this.router.navigateByUrl('/signup')
  }
}
