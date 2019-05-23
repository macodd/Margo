import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, MenuController } from '@ionic/angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  submitted = false;
  myFullname: string = 'Mark Codd';
  myEmail: string = 'mcodd@aol.com';
  myPhone: string = '123456789';

  private editFormGroup: FormGroup;

  iconName: string = 'create';
  iconEmail: string = 'create';
  iconPhone: string = 'create';

  disabledName = 'true';
  disabledEmail = 'true';
  disabledPhone = 'true';

  constructor(
    public router: Router,
    private fBuilder: FormBuilder,
    private menu: MenuController,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private screenOrientation: ScreenOrientation
  ) {
    this.menu.enable(false);
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);

  }

  ngOnInit() {}

  onNameEdit(){
    this.iconName = 'checkmark';
    this.disabledName = 'false';

  }

  onEmailEdit(){
    this.iconEmail = 'checkmark';
    this.disabledEmail = 'false';

  }

  onPhoneEdit(){
    this.iconPhone = 'checkmark';
    this.disabledPhone = 'false';

  }

  onComplete() {
    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: 'Deseas realizar los cambios?',
      buttons: [
        {
          text: 'OK',
          handler: () =>{
            this.presentLoading().then(()=>{
              this.router.navigateByUrl('/account').then(()=>{
                this.menu.enable(true);
              })
            })

          }
        },{
          text: 'Cancelar',
          handler:() =>{
            console.log('Cancel')
          }
        }]
    });

    await alert.present();
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

  onBack(){
    this.menu.enable(true);
    this.router.navigateByUrl('/account')
  }
}
