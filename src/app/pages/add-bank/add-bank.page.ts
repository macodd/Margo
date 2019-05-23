import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AlertController, LoadingController, MenuController, PickerController } from '@ionic/angular';
import { ScreenOrientation } from "@ionic-native/screen-orientation/ngx";
import { Validators, FormBuilder, FormGroup, FormControl} from "@angular/forms";

@Component({
  selector: 'app-add-bank',
  templateUrl: './add-bank.page.html',
  styleUrls: ['./add-bank.page.scss'],
})
export class AddBankPage implements OnInit {

  bankValue: any = 'Selecciona tu Banco';
  accountTypeValue: any = 'Tipo de Cuenta';

  showType: string = 'none';
  showNumber: string = 'none';

  private bankFormGroup: FormGroup;

  constructor(
    private router: Router,
    private menu: MenuController,
    private fBuilder: FormBuilder,
    private selector: PickerController,
    public alertController: AlertController,
    private loadingController: LoadingController,
    private screenOrientation: ScreenOrientation,
  ) {
    this.menu.enable(false);
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);

    this.bankFormGroup = fBuilder.group({
      accountNumber: ['', Validators.required],
    });

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
            this.bankValue = data.Bancos.text;
            this.bankFormGroup.addControl('bankName', new FormControl(this.bankValue, Validators.required));
            this.showType = 'initial';
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
            this.accountTypeValue = data.Tipo.text;
            this.bankFormGroup.addControl('accountType', new FormControl(this.accountTypeValue, Validators.required));
            this.showNumber = 'initial';
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

  goAddAccount(event: any){
    console.log(this.bankFormGroup.value);
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
