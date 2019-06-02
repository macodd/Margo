import { Component, OnInit, Input } from '@angular/core';
import { Storage } from "@ionic/storage";


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  @Input() textColor: String;

  image_member: any;
  firstname_member: String;
  lastname_member: String;
  username_member: String;
  account_type_member: String;

  constructor(
    private storage: Storage,
  ) { }

  ngOnInit() {
    this.storage.get('image_member').then((val) => {
      this.image_member = val;
    }, err=>{
      console.log(err)
    });
    this.storage.get('firstname_member').then((val) => {
      this.firstname_member = val;
    }, err=>{
      console.log(err)
    });
    this.storage.get('lastname_member').then((val) => {
      this.lastname_member = val;
    }, err=>{
      console.log(err)
    });
    this.storage.get('username_member').then((val) => {
      this.username_member = val;
    }, err=>{
      console.log(err)
    });
    this.storage.get('account_type_member').then((val) => {
      this.account_type_member = val;
    }, err=>{
      console.log(err)
    });
  }
}
