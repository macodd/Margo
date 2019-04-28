import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MenuController } from '@ionic/angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.page.html',
  styleUrls: ['./balance.page.scss'],
})
export class BalancePage implements OnInit {

  constructor(
    private router: Router,
    private menu: MenuController,
    private screenOrientation: ScreenOrientation
  ) {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }

  ngOnInit() {
    this.menu.enable(false);
  }

  goAddBalance() {
    this.router.navigateByUrl('/add-balance')
  }

  goDeposit() {
    this.router.navigateByUrl('/deposit')
  }

  onBack() {
    this.menu.enable(true);
    this.router.navigateByUrl('/account');
  }

}
