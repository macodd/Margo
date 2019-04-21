import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { ModalController, IonContent, IonFabButton } from '@ionic/angular';
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
    private router: Router
  ) {}

  toAccept(){
    this.router.navigateByUrl('/account');
  }

  toCancel(){
    this.router.navigateByUrl('/signup');
  }

  onBack() {
    this.router.navigateByUrl('/signup')
  }
}
