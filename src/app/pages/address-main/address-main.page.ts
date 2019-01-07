import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'address-main',
  templateUrl: './address-main.page.html',
  styleUrls: ['./address-main.page.scss'],
})
export class AddressMainPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  onClickMapCard(event) {
    this.router.navigateByUrl('/address-map');
  }

  onClickFormCard(event) {
    this.router.navigateByUrl('/address-form');
  }

}
