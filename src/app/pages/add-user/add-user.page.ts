import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddUserService } from './add-user.service';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { MenuController } from "@ionic/angular";

import { Storage} from "@ionic/storage";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.page.html',
  styleUrls: ['./add-user.page.scss']
})
export class AddUserPage implements OnInit {

  user: any = {image: String, name: String, username: String, type: String};

  titlePage: string;

  constructor(
    private storage: Storage,
    private router: Router,
    private route: ActivatedRoute,
    private addUserService: AddUserService,
    private menu: MenuController,
    private screenOrientation: ScreenOrientation
  ) {
    this.menu.enable(false);
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    this.route.queryParams.subscribe(params => {
      this.user = {
        image: params['image'],
        name: params['name'],
        username: params['username'],
        type: params['type']
      };
    });
  }

  ngOnInit() {
    this.titlePage = this.user.name.split(' ')[0];

  }

  setToTransfer() {
    this.storage.set('image', this.user.image);
    this.storage.set('name', this.user.name);
    this.storage.set('username', this.user.username);
    this.storage.set('type', this.user.type);
    this.addUserService.transferToUser(true);
    this.router.navigateByUrl('transfer');
  }

  onBack(){
    this.router.navigateByUrl('transfer');
  }

}
