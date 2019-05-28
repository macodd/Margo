import { LoadingController, Platform, MenuController, AlertController } from '@ionic/angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
// import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, ViewEncapsulation } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';

import { BackendAPIService } from '../../services/backend-api.service';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginPage {

  origin: String = '';
  private userFormGroup: FormGroup;

  constructor(

    private router: Router,
    private storage: Storage,
    private platform: Platform,
    private menu: MenuController,
    private route: ActivatedRoute,
    private fBuilder: FormBuilder,
    private backend: BackendAPIService,
    private alertCtrl: AlertController,
    private loadingController: LoadingController,
    private screenOrientation: ScreenOrientation,

    // public fingerprint: FingerprintAIO

    ) {
    this.route.queryParams.subscribe(params => {
        this.origin = params['origin'];
    });
    this.menu.enable(false);
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);

    this.userFormGroup = fBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  onLogin(event) {
    event.preventDefault();
    this.presentLoading().then(()=>{
      this.backend.login(this.userFormGroup.value).subscribe((data)=>{
        console.log("success");
        this.storage.set('authToken', data['token']);
        this.storage.set('user', data['user']);
        this.storage.set('expires', data['expires']);
        this.router.navigateByUrl('/auth-pin');
      }, (error)=>{
        console.log("error", error);
        // alert(error['error']['detail'])
        this.InvalidUser();
      });
    })
  }

  goTutorial(){
    this.router.navigateByUrl('/tutorial');
  }

  onHelp(){
    this.router.navigateByUrl('/help');
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      duration: 2000,
      spinner: "crescent",
      cssClass: 'my-loading-class'
    });
    loading.present();
    return await loading.onWillDismiss();
  }

  async InvalidUser(){
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      cssClass: 'alertConfirm',
      message: 'Usuario/contraseña invalido.',
      buttons: ['OK']
    });
    return await alert.present();
  }


 //  public async showFingerprintAuthDlg(){
 //  //Check if Fingerprint or Face  is available
 //  const available = await this.fingerprint.isAvailable();
 //  if (available === 'finger' || available === 'face') {
 //    await this.fingerprint.show({
 //      clientId: 'rekognitionElisa',
 //      clientSecret: 'nihinBioAuthElisa', //Only necessary for Android
 //      disableBackup: true, //Only for Android(optional)
 //      localizedFallbackTitle: 'Use Pin', //Only for iOS
 //      localizedReason: 'Please Authenticate' //Only for iOS
 //    }).then((result: any) => {
 //      if(this.platform.is('android')){
 //        this.router.navigateByUrl('/account')
 //      }
 //      if(result == "Success"){
 //        this.router.navigateByUrl('/account')
 //      }
 //    }).catch((error: any) => {
 //      console.log(error);
 //    });
 //  }
 // }

}
