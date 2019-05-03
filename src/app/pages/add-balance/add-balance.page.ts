import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { MenuController, PickerController} from '@ionic/angular';
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
  myBankoptions: any = [];

  myBanks: any = [{bank: String, accountNumber: String}];

  actionTitle: any;
  actionImage: any;


  constructor(
    private router: Router,
    private menu: MenuController,
    private screenOrientation: ScreenOrientation,
    private selector: PickerController,
    private route: ActivatedRoute
  ) {
    this.menu.enable(false);
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);



    // this.myBanks = [
    //   {
    //     bank: 'Produbanco',
    //     accountNumber: '123456'
    //   },
    //   {
    //     bank: 'Guayaquil',
    //     accountNumber: '12345'
    //   },
    //   {
    //     bank: 'Pacifico',
    //     accountNumber: '12345678'
    //   }
    // ];
    // for (let i of this.myBanks){
    //   console.log(i.bank)
    // }
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
            console.log(data)
          }
        }],
      columns:[
        { name: 'Bancos', options:[]}]
    });
    await myPicker.present();
  }


  onBack(){
    this.menu.enable(true);
    this.router.navigateByUrl('/balance');
  }
}
