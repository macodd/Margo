import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MenuController, AlertController } from '@ionic/angular';
import { ScreenOrientation } from "@ionic-native/screen-orientation/ngx";

@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.page.html',
  styleUrls: ['./bank-account.page.scss'],
})
export class BankAccountPage implements OnInit {

  banks: Array<any> = [{img: String, bankName: String, accountType: String, accountNumber: String}];

  constructor(
    private router: Router,
    private menu: MenuController,
    private alertCtrl: AlertController,
    private screenOrientation: ScreenOrientation
  ) {
    this.menu.enable(false);
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }

  ngOnInit() {
    this.banks = [
      {
        img: 'bank_Boliv',
        bankName: 'Bolivariano',
        accountType: 'Corriente',
        accountNumber: '123456',
      },
      {
        img: 'bank_Pacifico',
        bankName: 'Pacifico',
        accountType: 'Ahorro',
        accountNumber: '123456',
      },
      {
        img: 'bank_Gquil',
        bankName: 'Guayaquil',
        accountType: 'Corriente',
        accountNumber: '123456',
      },
    ];
  }
  onTrash() {
    this.presentAlert();
  }

  addBank(){
    this.router.navigateByUrl('/add-bank')
  }

  getAccountNumber(bankAccountNumber){
    var num = bankAccountNumber.substr(bankAccountNumber.length - 4 );
    return  '***' + num.toString();
  }

  onBack(){
    this.menu.enable(true);
    this.router.navigateByUrl('/account');
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Eliminar',
      message: 'Deseas Eliminar esta cuenta?',
      buttons: ['Borrar', 'Cancelar']
    });

    await alert.present();
  }
}
