import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MenuController, PickerController } from '@ionic/angular';
import { ScreenOrientation } from "@ionic-native/screen-orientation/ngx";

@Component({
  selector: 'app-add-bank',
  templateUrl: './add-bank.page.html',
  styleUrls: ['./add-bank.page.scss'],
})
export class AddBankPage implements OnInit {

  bankValue: any = 'Selecciona tu Banco';
  accountTypeValue: any = 'Tipo de Cuenta';
  bankData: any = [];

  constructor(
    private router: Router,
    private menu: MenuController,
    private screenOrientation: ScreenOrientation,
    private selector: PickerController
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

  onBack(){
    this.menu.enable(true);
    this.router.navigateByUrl('/bank-account');
  }
}
