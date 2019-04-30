import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MenuController } from '@ionic/angular';
import { ScreenOrientation } from "@ionic-native/screen-orientation/ngx";

@Component({
  selector: 'app-add-balance',
  templateUrl: './add-balance.page.html',
  styleUrls: ['./add-balance.page.scss'],
})
export class AddBalancePage implements OnInit {

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

  onBack(){
    this.menu.enable(true);
    this.router.navigateByUrl('/account');
  }
}
