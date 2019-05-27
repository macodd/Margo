import { Component, ViewEncapsulation } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
// import { Storage } from '@ionic/storage';

import { UserData } from '../../services/user-data';
import { BackendAPIService } from '../../services/backend-api.service';

import { LoadingController, Platform, MenuController } from '@ionic/angular';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginPage {

  origin: String = '';
  submitted = false;
  private userFormGroup: FormGroup;

  constructor(
    private userData: UserData,
    private router: Router,
    // private storage: Storage,
    private backend: BackendAPIService,
    private fBuilder: FormBuilder,
    private loadingController: LoadingController,
    private platform: Platform,
    private route: ActivatedRoute,
    private menu: MenuController,
    private screenOrientation: ScreenOrientation,
    public fingerprint: FingerprintAIO
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

  ionViewDidEnter() {
    this.showFingerprintAuthDlg();
  }
  onLogin(event) {
    this.submitted = true;
    this.backend.login();

    this.presentLoading().then(() => {
      this.router.navigateByUrl('/auth-pin');
    });
    setTimeout(()=>{
      this.userFormGroup.reset();
    }, 2000)
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
  public async showFingerprintAuthDlg(){
    //Check if Fingerprint or Face  is available
    const available = await this.fingerprint.isAvailable();
    if (available === 'finger' || available === 'face') {
       await this.fingerprint.show({
         clientId: 'rekognitionElisa',
         clientSecret: 'nihinBioAuthElisa', //Only necessary for Android
         disableBackup: true, //Only for Android(optional)
         localizedFallbackTitle: 'Use Pin', //Only for iOS
         localizedReason: 'Please Authenticate' //Only for iOS
       })
       .then((result: any) => {
        if(this.platform.is('android')){}
         if(result == "Success"){}
       })
       .catch((error: any) => {
         console.log(error);
       });
     }
 }

}
