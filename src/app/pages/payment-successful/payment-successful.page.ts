import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ScreenOrientation} from "@ionic-native/screen-orientation/ngx";
import {MenuController} from "@ionic/angular";

@Component({
  selector: 'payment-successful',
  templateUrl: './payment-successful.page.html',
  styleUrls: ['./payment-successful.page.scss'],
})
export class PaymentSuccessfulPage implements OnInit {

  constructor(
    private router: Router,
    private screenOrientation: ScreenOrientation,
    private menu: MenuController,
  ) {
    this.menu.enable(false);
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }

  ngOnInit() {
  }

  backToHome() {
    this.menu.enable(true);
    this.router.navigateByUrl('/account');
  }
}
