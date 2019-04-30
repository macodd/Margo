import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MenuController } from '@ionic/angular';
import { ScreenOrientation } from "@ionic-native/screen-orientation/ngx";

@Component({
  selector: 'app-add-bank',
  templateUrl: './add-bank.page.html',
  styleUrls: ['./add-bank.page.scss'],
})
export class AddBankPage implements OnInit {

  constructor(
    private router: Router,
    private menu: MenuController,
    private screenOrientation: ScreenOrientation
  ) {
    this.menu.enable(false);
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }

  ngOnInit() {
  }

  customBankOptions: any = {
    header: 'Banco',
    translucent: true
  };

  customTypeOptions: any = {
    header: 'Tipo de Cuenta',
    translucent: true
  };


  onBack(){
    this.menu.enable(true);
    this.router.navigateByUrl('/bank-account');
  }
}
