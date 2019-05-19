import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, LoadingController, MenuController} from '@ionic/angular';
import { ScreenOrientation } from "@ionic-native/screen-orientation/ngx";

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.page.html',
  styleUrls: ['./subscribe.page.scss'],
})
export class SubscribePage implements OnInit {

  purchasePrice: any;
  puchaseType: any;
  originPage: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private menu: MenuController,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private screenOrientation: ScreenOrientation
  ) {
    this.route.queryParams.subscribe(params => {
      this.originPage = params['origin'];
    });
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }

  ngOnInit() {
  }

  purchaseOne(){
    this.puchaseType = 'one';
    this.purchasePrice = '49.99';
    this.presentAlert();
  }

  purchasePlus(){
    this.puchaseType = 'plus';
    this.purchasePrice = '99.99';
    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      cssClass: "alertConfirm",
      message: 'Deseas adquirir margo ' + this.puchaseType + ' por ' + this.purchasePrice + "?",
      buttons: [
        {
          text: 'Cancelar',
          handler:() =>{
            console.log('Cancel')

          }
        },{
          text: 'OK',
            handler: () =>{
            this.presentLoading().then(()=>{
              this.menu.enable(true);
              this.router.navigateByUrl(this.originPage);
              this.presentConfirm();
            })
          }
        }]
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

  async presentConfirm() {
    const alert = await this.alertController.create({
      header: 'Listo',
      cssClass: 'alertConfirm',
      message: 'Gracias por subscribirte a \nmargo ' + this.puchaseType,
      buttons: ['OK']
    });

    await alert.present();
  }

  onBack() {
    this.menu.enable(true);
    this.router.navigateByUrl(this.originPage);
  }
}
