import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, MenuController } from '@ionic/angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { BackendAPIService } from "../../services/backend-api.service";
import { Storage } from "@ionic/storage";


@Component({
  selector: 'auth-pin',
  templateUrl: './auth-pin.page.html',
  styleUrls: ['./auth-pin.page.scss']
})
export class AuthPinPage implements OnInit {

  private pin: string = '';
  user: any;

  constructor(
    private router: Router,
    private backend: BackendAPIService,
    private menu: MenuController,
    private storage: Storage,
    private loadingController: LoadingController,
    private screenOrientation: ScreenOrientation
  ){
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    this.storage.get('user').then(val =>{
      this.user = val
    });
  }

  ngOnInit() {
    this.menu.enable(false);
  }

  handleInput(digit: string){
    this.pin += digit;
    if(this.pin.length == 4){
      this.backend.pincheck({'auth_pin': this.pin}).subscribe(data =>{
        this.presentLoading().then(()=>{
          this.backend.get('profiles/' + String(this.user), true).subscribe(data =>{
            this.storage.set('first_name', data['first_name']);
            this.storage.set('last_name', data['last_name']);
            this.storage.set('username', data['username']);
            this.storage.set('account_type', data['profile']['account_type']);
            this.storage.set('balance', data['profile']['balance']);
            this.storage.set('image', data['profile']['image']);
            this.router.navigateByUrl('/account')
          }, err=>{
            console.log(err)
          });
        });
      }, err =>{
        this.pin = '';
        console.log(err)
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
    this.router.navigateByUrl('/login');
  }
}
