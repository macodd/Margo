import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddUserService } from './add-user.service';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import {MenuController} from "@ionic/angular";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.page.html',
  styleUrls: ['./add-user.page.scss']
})
export class AddUserPage implements OnInit {

  user = false;

  constructor(
    private router: Router,
    private addUserService: AddUserService,
    private menu: MenuController,
    private screenOrientation: ScreenOrientation
  ) {
    this.menu.enable(false);
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }

  ngOnInit() {
    this.user = true;
    this.addUserService.transferToUser(this.user);
  }

  setToTransfer() {
    this.router.navigateByUrl('transfer');
  }

  onBack(){
    this.router.navigateByUrl('transfer');
  }

}
