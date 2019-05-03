import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { MenuController } from '@ionic/angular';
import { ScreenOrientation } from "@ionic-native/screen-orientation/ngx";

@Component({
  selector: 'app-add-balance',
  templateUrl: './add-balance.page.html',
  styleUrls: ['./add-balance.page.scss'],
})
export class AddBalancePage implements OnInit {

  actionType: any;
  sub: any;

  actionAdd: any = [];
  actionDep: any = [];

  constructor(
    private router: Router,
    private menu: MenuController,
    private screenOrientation: ScreenOrientation,
    private route: ActivatedRoute
  ) {
    this.menu.enable(false);
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params =>{
      this.actionType = params['action'];
      console.log(this.actionType)
    })
  }



  onBack(){
    this.menu.enable(true);
    this.router.navigateByUrl('/balance');
  }
}
