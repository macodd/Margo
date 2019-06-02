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

  count: number;
  results: any[];

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

    this.grabMembers();

  }

  ngOnInit() {
  }

  grabMembers() {
    const path = 'members/';
    this.backend.get(path, true).subscribe(data=>{
      this.count = data['count'] as number;
      this.results = data['results'] as any;
    }, err=>{
      console.log(err)
    })
  }

  onBack(){
    this.menu.enable(true);
    this.router.navigateByUrl('/transfer')
  }

  addUser(member: any) {
    const navigationExtras: NavigationExtras  = {
      queryParams: {'username_member': member}
    };
    this.router.navigate(['add-user'], navigationExtras);
  }

}
