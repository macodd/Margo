import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { ModalController, IonContent, IonFab, IonFabButton } from '@ionic/angular';
import { TermsDialogPage } from '../terms-dialog/terms-dialog.page';
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
  constructor(public modalCtrl: ModalController,
            public router: Router) { }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: TermsDialogPage
      // componentProps: { excludedTracks: this.excludeTracks }
    });
    await modal.present();
  }

  onBottomClick() {
    this.content.scrollToBottom(300);
    this.fabButton.show = false;
  }

  toAccept(){
    this.router.navigateByUrl('account');
  }
}
