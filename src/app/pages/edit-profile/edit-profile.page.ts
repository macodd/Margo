import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, MenuController } from '@ionic/angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Storage } from "@ionic/storage";

@Component({
  selector: 'edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  submitted = false;
  first_name: string;
  last_name: string;
  user_email: string;
  user_phone: string;
  user_image: any;

  private editFormGroup: FormGroup;

  iconName: string = 'create';
  iconEmail: string = 'create';
  iconPhone: string = 'create';

  disabledFirstName = 'true';
  disabledLastName = 'true';
  disabledEmail = 'true';
  disabledPhone = 'true';

  numName: number = 1;
  numEmail: number = 1;
  numPhone: number = 1;

  constructor(
    public router: Router,
    private fBuilder: FormBuilder,
    private menu: MenuController,
    private storage: Storage,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private screenOrientation: ScreenOrientation
  ) {
    this.menu.enable(false);
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);

    this.storage.get('first_name_user').then(val=>{this.first_name = val});
    this.storage.get('last_name_user').then(val=>{this.last_name = val});
    this.storage.get('phone_user').then(val=>{this.user_phone = val});
    this.storage.get('email_user').then(val=>{this.user_email = val});
    this.storage.get('image_user').then(val=>{this.user_image = val});

    this.editFormGroup = fBuilder.group({
      name:  ['', Validators.required],
      email: ['', Validators.required],
      phone: ['',Validators.required]
    })

  }

  ngOnInit() {}

  onImageEdit(files:FileList){
    let imageItem = files.item(0);
    if (imageItem){
      this.user_image = imageItem
    }
  }

  onFirstNameEdit(){
    let check  = Math.abs(this.numName - 1);
    this.numName = check;
    if (check == 0) {
      this.iconName = 'checkmark';
      this.disabledFirstName = 'false';
    } else {
      this.iconName = 'create';
      this.disabledFirstName = 'true';
    }
  }

  onLastNameEdit(){
    let check  = Math.abs(this.numName - 1);
    this.numName = check;
    if (check == 0) {
      this.iconName = 'checkmark';
      this.disabledLastName = 'false';
    } else {
      this.iconName = 'create';
      this.disabledLastName = 'true';
    }
  }

  onEmailEdit(){
    let check  = Math.abs(this.numEmail - 1);
    this.numEmail = check;
    if (check == 0) {
      this.iconEmail = 'checkmark';
      this.disabledEmail = 'false';
    } else {
      this.iconEmail = 'create';
      this.disabledEmail = 'true';
    }
  }

  onPhoneEdit(){
    let check  = Math.abs(this.numPhone - 1);
    this.numPhone = check;
    if (check == 0) {
      this.iconPhone = 'checkmark';
      this.disabledPhone = 'false';
    } else {
      this.iconPhone = 'create';
      this.disabledPhone = 'true';
    }
  }

  onComplete(event) {
    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      cssClass: 'alertConfirm',
      message: 'Deseas realizar los cambios?',
      buttons: [
        {
          text: 'Cancelar',
          handler:() =>{
            console.log('Cancel')
          }
        }, {
          text: 'OK',
          handler: () =>{
            this.presentLoading().then(()=>{
              this.router.navigateByUrl('/account').then(()=>{
                this.menu.enable(true);
              })
            })

          }
        },]
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
