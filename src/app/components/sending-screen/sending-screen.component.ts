import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";
import { Storage } from "@ionic/storage";

@Component({
  selector: 'app-sending-screen',
  templateUrl: './sending-screen.component.html',
  styleUrls: ['./sending-screen.component.scss'],
})
export class SendingScreenComponent implements OnInit {

  sendImg: string;

  constructor(
    private storage: Storage
  ) {
    storage.get('image').then((val) =>{
      this.sendImg = val;
    })
  }

  ngOnInit() {
  }

}
