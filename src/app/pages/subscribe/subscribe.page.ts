import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.page.html',
  styleUrls: ['./subscribe.page.scss'],
})
export class SubscribePage implements OnInit {

  constructor(private router: Router, private menu: MenuController) { }

  ngOnInit() {
  }

  onBack() {
    this.menu.enable(true);
    this.router.navigateByUrl('/account');
  }
}
