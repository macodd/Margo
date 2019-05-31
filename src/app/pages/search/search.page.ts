import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router} from '@angular/router';
import { ScreenOrientation } from "@ionic-native/screen-orientation/ngx";
import { MenuController } from "@ionic/angular";
import { AddUserService } from "../add-user/add-user.service";
import { BackendAPIService } from "../../services/backend-api.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  users: Array<any> = [{image: String, name: String, username: String, type: String}];

  constructor(
    private router: Router,
    private menu: MenuController,
    private backend: BackendAPIService,
    private addUserService: AddUserService,
    private screenOrientation: ScreenOrientation
  ) {
    this.menu.enable(false);
    this.addUserService.transferToUser(false);
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    this.users = [
      {
        image: 'pepin.png',
        name: 'Pepin Quez',
        username: 'pquez',
        type: 'Personal',
      },
      {
        image: 'semri.jpg',
        name: 'Semra Aydemir',
        username: 'semri2019',
        type: 'Personal',
      }
    ];
  }

  ngOnInit() {
  }

  grabMembers() {
    const path = 'members/';
    this.backend.get(path, true).subscribe(data=>{
      console.log(data)
    }, err=>{
      console.log(err)
    })
  }

  onBack(){
    this.menu.enable(true);
    this.router.navigateByUrl('/transfer')
  }

  addUser(user: any) {
    const navigationExtras: NavigationExtras  = {
      queryParams: user};
    this.router.navigate(['add-user'], navigationExtras);
  }

}
