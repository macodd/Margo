import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ScreenOrientation} from "@ionic-native/screen-orientation/ngx";

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  users: Array<Object> = [{name: String, username: String, location: String}];

  constructor(
    private router: Router,
    private screenOrientation: ScreenOrientation
  ) {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    this.users = [
      {
        name: 'Mark Codd Christopherson',
        username: 'marky2186',
        location: 'United States'
      }
    ];
  }

  ngOnInit() {
  }

  onBack(){
    this.router.navigateByUrl('/transfer')
  }

  addUser() {
    this.router.navigateByUrl('add-user');
  }

}
