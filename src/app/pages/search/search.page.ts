import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router} from '@angular/router';
import { ScreenOrientation } from "@ionic-native/screen-orientation/ngx";
import { MenuController } from "@ionic/angular";
import { AddUserService } from "../add-user/add-user.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  users: Array<any> = [{image: String, name: String, username: String, location: String}];

  constructor(
    private router: Router,
    private menu: MenuController,
    private addUserService: AddUserService,
    private screenOrientation: ScreenOrientation
  ) {
    this.menu.enable(false);
    this.addUserService.transferToUser(false);
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    this.users = [
      {
        image: 'mark-2.jpg',
        name: 'Mark Codd',
        username: 'marky2186',
        location: 'United States',
      },
      {
        image: 'semri.jpg',
        name: 'Semra Aydemir',
        username: 'semri2019',
        location: 'United States',
      }
    ];
  }

  ngOnInit() {
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
