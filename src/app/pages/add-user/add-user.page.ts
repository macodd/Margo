import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddUserService } from './add-user.service';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { MenuController } from "@ionic/angular";

import { Storage} from "@ionic/storage";
import { BackendAPIService } from "../../services/backend-api.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.page.html',
  styleUrls: ['./add-user.page.scss']
})
export class AddUserPage implements OnInit {

  image_member: any;
  firstname_member: string;
  lastname_member: string;
  username_member: string;
  account_type_member: string;

  constructor(
    private router: Router,
    private storage: Storage,
    private backend: BackendAPIService,
    private menu: MenuController,
    private route: ActivatedRoute,
    private addUserService: AddUserService,
    private screenOrientation: ScreenOrientation
  ) {
    this.menu.enable(false);
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    this.route.queryParams.subscribe(params => {

    this.username_member = params['username_member'];
    });

    this.grabMember(this.username_member);
  }

  grabMember(member) {
    const path = 'members/' + String(member);
    this.backend.get(path, true).subscribe(data =>{

      this.firstname_member = data['firstname'];
      this.lastname_member = data['lastname'];
      this.account_type_member = data['account_type'];
      this.image_member = data['image'];

    }, err=>{
      console.log(err)
    })
  }

  ngOnInit() { }

  setToTransfer() {
    this.storage.set('image_member', this.image_member);
    this.storage.set('firstname_member', this.firstname_member);
    this.storage.set('lastname_member', this.lastname_member);
    this.storage.set('username_member', this.username_member);
    this.storage.set('account_type_member', this.account_type_member);
    this.addUserService.transferToUser(true);
    this.router.navigateByUrl('transfer');
  }

  onBack(){
    this.router.navigateByUrl('transfer');
  }

}
