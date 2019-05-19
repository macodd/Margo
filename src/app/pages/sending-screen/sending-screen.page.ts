import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-sending-screen',
  templateUrl: './sending-screen.page.html',
  styleUrls: ['./sending-screen.page.scss'],
})
export class SendingScreenPage implements OnInit {

  constructor(
    private route: Router
  ) { }

  ngOnInit() {
    let dismissPage = setTimeout(()=>{
      this.route.navigateByUrl('/payment-successful')
    }, 7000);
  }

}
