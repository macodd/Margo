import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {AlertController, LoadingController, MenuController, PickerController} from '@ionic/angular';
import { ScreenOrientation } from "@ionic-native/screen-orientation/ngx";

@Component({
  selector: 'app-add-bank',
  templateUrl: './add-bank.page.html',
  styleUrls: ['./add-bank.page.scss'],
})
export class AddBankPage implements OnInit {

  bankValue: any = 'Selecciona tu Banco';
  accountTypeValue: any = 'Tipo de Cuenta';
  accountNumber: any = '';
  bankData: any = [];

  btnDisabled: boolean = true;
  showType: string = 'none';
  showNumber: string = 'none';

  constructor(
    private router: Router,
    private menu: MenuController,
    private screenOrientation: ScreenOrientation,
    private selector: PickerController,
    public alertController: AlertController,
    private loadingController: LoadingController
  ) {
    this.menu.enable(false);
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }

  ngOnInit() {
  }

  async openBankPicker(){
    const picker = await this.selector.create({
      buttons: [
        {
          text: ''
        },
        {
          text: 'Listo',
          handler: (data: any) => {
            this.bankData[0] = data.Bancos.value;
            this.bankValue = data.Bancos.text;
            this.checkButton();
            this.showType = 'initial';
            console.log(this.bankData)
          }
        }],
      columns: [
        { name: 'Bancos', options: [
          {
            text: 'Produbanco',
            value: 'produbanco'
          },
          {
            text: 'Guayaquil',
            value: 'guayaquil'
          },
          {
            text: 'Pacifico',
            value: 'pacifico'
          }
        ]}]
    });
    await picker.present();
  }

  async openAccountTypePicker(){
    const picker = await this.selector.create({
      buttons: [
        {
          text: ''
        },
        {
          text: 'Listo',
          handler: (data: any) => {
            this.bankData[1] = data.Tipo.value;
            this.accountTypeValue = data.Tipo.text;
            this.checkButton();
            this.showNumber = 'initial';
            console.log(this.bankData)
          }
        }],
      columns: [
        { name: 'Tipo', options: [
            {
              text: 'Corriente',
              value: 'corriente'
            },
            {
              text: 'Ahorros',
              value: 'ahorros'
            }
          ]}]
    });
    await picker.present();
  }

  checkButton(){
    if(this.bankData.length === 3){
      this.btnDisabled = false;
    }
  }

  goAddAccount(){
    this.bankData[2] = this.accountNumber;
    console.log(this.bankData);
    this.presentLoading().then(()=>{
      this.router.navigateByUrl('/bank-account');
      this.presentAlert();
    })
  }

  onBack(){
    this.menu.enable(true);
    this.router.navigateByUrl('/bank-account');
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'alertConfirm',
      header: 'Listo',
      subHeader: 'Cuenta Agregada',
      message: 'Su cuenta a sido agregada. Puede hacer uso de su cuenta en 1 dia',
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

}
