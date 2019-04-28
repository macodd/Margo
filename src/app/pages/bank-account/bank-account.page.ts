import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MenuController } from '@ionic/angular';
import {ScreenOrientation} from "@ionic-native/screen-orientation/ngx";

@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.page.html',
  styleUrls: ['./bank-account.page.scss'],
})
export class BankAccountPage implements OnInit {

  constructor(
    private router: Router,
    private menu: MenuController,
    private screenOrientation: ScreenOrientation
  ) {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }

  ngOnInit() {
  }

  onBack(){
    this.menu.enable(true);
    this.router.navigateByUrl('/account');
  }
}
