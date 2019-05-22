import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";

@Component({
  selector: 'app-sending-screen',
  templateUrl: './sending-screen.component.html',
  styleUrls: ['./sending-screen.component.scss'],
})
export class SendingScreenComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

}
