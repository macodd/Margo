import { Component, OnInit, Input } from '@angular/core';
import { Storage } from "@ionic/storage";


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  @Input() textColor: String;

  user: any = { image: String, name: String, username: String, location: String };

  constructor(
    private storage: Storage,
  ) { }

  ngOnInit() {
    this.storage.get('image').then((val) => {
      this.user.image = val;
    });
    this.storage.get('name').then((val) => {
      this.user.name = val;
    });
    this.storage.get('username').then((val) => {
      this.user.username = val;
    });
    this.storage.get('location').then((val) => {
      this.user.location = val;
    });
  }

}
