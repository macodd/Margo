import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { ModalController, Content, Fab, FabButton } from '@ionic/angular';
import { TermsDialogPage } from '../terms-dialog/terms-dialog.page';

@Component({
  selector: 'terms',
  templateUrl: './terms.page.html',
  styleUrls: ['./terms.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TermsPage {

  @ViewChild(Content) content: Content;
  @ViewChild(FabButton) fabButton: FabButton;
  constructor(public modalCtrl: ModalController) { }

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

}
