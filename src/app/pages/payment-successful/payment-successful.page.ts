import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ScreenOrientation} from "@ionic-native/screen-orientation/ngx";

@Component({
  selector: 'payment-successful',
  templateUrl: './payment-successful.page.html',
  styleUrls: ['./payment-successful.page.scss'],
})
export class PaymentSuccessfulPage implements OnInit {

  constructor(
    private router: Router,
    private screenOrientation: ScreenOrientation
  ) {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }

  ngOnInit() {
  }

  backToHome() {
    this.router.navigateByUrl('/account');
  }
}
