import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import {AlertController, LoadingController, MenuController, PickerController} from '@ionic/angular';
import { ScreenOrientation } from "@ionic-native/screen-orientation/ngx";

@Component({
  selector: 'app-add-balance',
  templateUrl: './add-balance.page.html',
  styleUrls: ['./add-balance.page.scss'],
})
export class AddBalancePage implements OnInit {

  actionType: any;
  sub: any;
  mybankValue: any = 'Selecciona una cuenta';
  bankData: any = [];
  amount: string;
  btnDisabled: boolean = true;

  actionTitle: any;
  actionImage: any;


  constructor(
    private router: Router,
    private menu: MenuController,
    private screenOrientation: ScreenOrientation,
    private selector: PickerController,
    private route: ActivatedRoute,
    private alertController: AlertController,
    private loadingController: LoadingController
  ) {
    this.menu.enable(false);
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params =>{
      this.actionType = params['action'];

      if (this.actionType == 'add'){
        this.actionTitle = 'Añadir';
        this.actionImage = 'deposit';
      }
      if (this.actionType == 'dep'){
        this.actionTitle = 'Depositar';
        this.actionImage = 'request';
      }
    })
  }

  async openMyBankPicker() {
    const myPicker = await this.selector.create({
      buttons: [
        {
          text: ''
        },
        {
          text: 'Listo',
          handler: (data: any) => {
            this.bankData[0] = data.Bancos.value;
            this.bankData[1] = this.actionType;
            this.bankData[2] = this.amount;
            this.checkButton();
            this.mybankValue = data.Bancos.text;
          }
        }],
      columns:[
        { name: 'Bancos', options: [
            {
              text: 'Produbanco **2345',
              value: 'produbanco'
            },
            {
              text: 'Guayaquil **2345',
              value: 'guayaquil'
            },
            {
              text: 'Pacifico **2345',
              value: 'pacifico'
            }
          ]}]
    });
    await myPicker.present();
  }

  goAddedBalance(){
    this.presentAlert();
  }

  checkButton() {
    if (this.bankData.length === 3 && this.amount !== ''){
      this.btnDisabled = false;
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      cssClass: 'alertConfirm',
      message: 'Deseas '+ this.actionTitle + ' ' + this.amount + '?',
      buttons: [
        {
          text: 'Cancelar',
          handler:() =>{
            console.log('Cancel')
          }
        },{
        text: 'OK',
        handler: () => {
          this.presentLoading().then(() => {
            this.router.navigateByUrl('/balance');
            this.presentConfirm();
          })
        }
      }]
    });

    await alert.present();
  }

  async presentConfirm() {
    const alert = await this.alertController.create({
      header: 'Listo',
      cssClass: 'alertConfirm',
      message: 'Su balance a sido actualizado.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      duration: 3000,
      spinner: "crescent",
      cssClass: 'my-loading-class'
    });
    loading.present();
    return await loading.onWillDismiss();
  }

  onBack(){
    this.menu.enable(true);
    this.router.navigateByUrl('/balance');
  }
}
