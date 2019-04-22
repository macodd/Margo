import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification-dialog',
  templateUrl: './notification-dialog.page.html',
  styleUrls: ['./notification-dialog.page.scss']
})
export class NotificationDialogPage implements AfterViewInit {

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

  onMouseUp() {
    this.dismiss();
    this.router.navigateByUrl('/notifications');
  }
}
