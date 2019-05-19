import { Component, OnInit } from '@angular/core';
import { ModalController } from "@ionic/angular";
import { Router } from "@angular/router";

@Component({
  selector: 'app-notification-dialog',
  templateUrl: './notification-dialog.component.html',
  styleUrls: ['./notification-dialog.component.scss'],
})
export class NotificationDialogComponent implements OnInit {

  constructor(
    public modalCtrl: ModalController,
    private router: Router
  ) { }

  ngOnInit(): void {
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
