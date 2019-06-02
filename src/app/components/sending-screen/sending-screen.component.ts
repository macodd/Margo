import { Component, OnInit } from '@angular/core';
import { Storage } from "@ionic/storage";

@Component({
  selector: 'app-sending-screen',
  templateUrl: './sending-screen.component.html',
  styleUrls: ['./sending-screen.component.scss'],
})
export class SendingScreenComponent implements OnInit {

  image_user: any;
  image_member: any;

  constructor(
    private storage: Storage
  ) {
    storage.get('image_user').then((val) =>{
      this.image_user = val;
    });
    storage.get('image_member').then((val) =>{
      this.image_member = val;
    })
  }

  ngOnInit() {
  }

}
