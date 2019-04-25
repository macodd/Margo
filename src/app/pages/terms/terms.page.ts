import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { ModalController, IonContent, IonFabButton, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'terms',
  templateUrl: './terms.page.html',
  styleUrls: ['./terms.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TermsPage {

  @ViewChild(IonContent) content: IonContent;
  @ViewChild(IonFabButton) fabButton: IonFabButton;

  constructor(
    private modalCtrl: ModalController,
    private router: Router,
    private menu: MenuController
  ) {}

  toAccept(){
    this.menu.enable(true);
    this.router.navigateByUrl('/account');
  }

  toCancel(){
    this.router.navigateByUrl('/signup');
  }

  onBack() {
    this.router.navigateByUrl('/signup')
  }
}
