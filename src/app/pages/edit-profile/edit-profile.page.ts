import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, MenuController } from '@ionic/angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

// Interface
import { UserOptions } from '../../interfaces/user-options';

@Component({
  selector: 'edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  signup: UserOptions = {
    fullname: '',
    phone: '',
    email: '',
    id: '',
    };
  submitted = false;
  isViewPersonal = true;

  constructor(
    public router: Router,
    private alertController: AlertController,
    private menu: MenuController,
    private loadingController: LoadingController,
    private screenOrientation: ScreenOrientation
  ) {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }

  ngOnInit() {
  }

  onEdit(){
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
