import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddUserService } from './add-user.service';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

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
    private screenOrientation: ScreenOrientation
  ) {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }

  ngOnInit() {
    this.user = true;
    this.addUserService.transferToUser(this.user);
  }

  setToTransfer() {
    this.router.navigateByUrl('transfer');
  }

}
