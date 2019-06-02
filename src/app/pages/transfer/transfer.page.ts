import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from "@ionic/storage";
import { AddUserService } from '../add-user/add-user.service';
import { ScreenOrientation } from "@ionic-native/screen-orientation/ngx";
import { LoadingController, MenuController } from "@ionic/angular";

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.page.html',
  styleUrls: ['./transfer.page.scss']
})
export class TransferPage implements OnInit {

  currentUser: boolean = false;
  balance: any;

  constructor(
    private router: Router,
    private storage: Storage,
    private menu: MenuController,
    private addUserService: AddUserService,
    private screenOrientation: ScreenOrientation,
    private loadingController: LoadingController
  ) {
    this.menu.enable(false );
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);

    this.storage.get('balance').then(val=>{this.balance = val},err=>{ console.log(err)})
  }

  ngOnInit() {
    this.addUserService.userActivated.subscribe(
      (bool: boolean) => {
        this.currentUser = bool;
      }
    );
  }

  goSearch() {
    this.router.navigateByUrl('search');
  }

  transferMoney() {
    this.presentLoading().then(()=>{
      this.router.navigateByUrl('transfer-form');
    });
  }

  onBack() {
    this.menu.enable(true);
    this.router.navigateByUrl('/account')
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      duration: 2000,
      spinner: "crescent",
      cssClass: 'my-loading-class'
    });
    loading.present();
    return await loading.onWillDismiss();
  }

}
