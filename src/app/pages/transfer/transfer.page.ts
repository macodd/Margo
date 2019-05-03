import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddUserService } from '../add-user/add-user.service';
import { ScreenOrientation } from "@ionic-native/screen-orientation/ngx";
import { LoadingController } from "@ionic/angular";

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.page.html',
  styleUrls: ['./transfer.page.scss']
})
export class TransferPage implements OnInit {

  currentUser: boolean;

  constructor(
    private router: Router,
    private addUserService: AddUserService,
    private screenOrientation: ScreenOrientation,
    private loadingController: LoadingController
  ) {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }

  ngOnInit() {
    this.addUserService.userActivated.subscribe(
      (user: boolean) => {
        this.currentUser = user;
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
