import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from "@ionic/angular";
import { Router } from "@angular/router";

@Component({
  selector: 'app-notification-dialog',
  templateUrl: './notification-dialog.component.html',
  styleUrls: ['./notification-dialog.component.scss'],
})
export class NotificationDialogComponent implements OnInit {

  @Input() type: string;
  @Input() name: string;
  @Input() amount: string;
  @Input() date: string;
  @Input() orderNo: string;

  constructor(
    public modalCtrl: ModalController,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  onMouseUp() {
    this.dismiss();
    this.router.navigateByUrl('/notifications');
  }

}
