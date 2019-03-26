import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'terms-dialog',
  templateUrl: './terms-dialog.page.html',
  styleUrls: ['./terms-dialog.page.scss'],
})
export class TermsDialogPage implements AfterViewInit {

  constructor(
    public modalCtrl: ModalController,
    private router: Router
  ) { }

  ngAfterViewInit(): void {
  }

  dismiss(data?: any) {
    // using the injected ModalController this page
    // can "dismiss" itself and pass back data
    this.modalCtrl.dismiss(data);
  }

  goSuccessful() {
    this.dismiss();
    this.router.navigateByUrl('tutorial');
  }

}
