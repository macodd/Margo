import {Component, Input, OnInit} from '@angular/core';
import { ModalController } from "@ionic/angular";
import { Router } from "@angular/router";

@Component({
  selector: 'app-activity-dialog',
  templateUrl: './activity-dialog.component.html',
  styleUrls: ['./activity-dialog.component.scss'],
})
export class ActivityDialogComponent implements OnInit {

  @Input() type: string;
  @Input() name: string;
  @Input() amount: string;
  @Input() date: string;
  @Input() orderNo: string;

  constructor(
    public modalCtrl: ModalController,
    private router: Router
  ) { }

  ngOnInit(): void { }

  dismiss(data?: any) {
    // using the injected ModalController this page
    // can "dismiss" itself and pass back data
    this.modalCtrl.dismiss(data);
  }

  onMouseUp() {
    this.dismiss();
    this.router.navigateByUrl('/activity');
  }
}
