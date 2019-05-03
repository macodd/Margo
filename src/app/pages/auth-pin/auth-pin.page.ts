import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, MenuController } from '@ionic/angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';


@Component({
  selector: 'auth-pin',
  templateUrl: './auth-pin.page.html',
  styleUrls: ['./auth-pin.page.scss']
})
export class AuthPinPage implements OnInit {

  pin: string = '';

  constructor(
    private router: Router,
    private loadingController: LoadingController,
    private menu: MenuController,
    private screenOrientation: ScreenOrientation
  ){
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }

  ngOnInit() {
    this.menu.enable(false);
  }

  handleInput(digit: string){
    this.pin += digit;
    if(this.pin.length == 4){
      this.presentLoading().then(()=>{
        this.router.navigateByUrl('/account')
      });
    }
  }


  async presentLoading() {
    const loading = await this.loadingController.create({
      duration: 1000,
      spinner: "crescent",
      cssClass: 'my-loading-class'
    });
    loading.present();
    return await loading.onWillDismiss();
  }

  onBack() {
    this.router.navigateByUrl('/signup');
  }
}
