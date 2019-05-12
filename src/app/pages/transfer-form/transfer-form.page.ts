import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition } from '@angular/animations';
import { IonInput, MenuController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { SendMoneyDialogPage } from '../send-money-dialog/send-money-dialog.page';
import { ScreenOrientation } from "@ionic-native/screen-orientation/ngx";

@Component({
  selector: 'app-transfer-form',
  templateUrl: './transfer-form.page.html',
  styleUrls: ['./transfer-form.page.scss'],
  animations: [
    trigger('headerState', [
      state('initial', style({
        height: '90%'
      })),
      state('compressed', style({
        height: '90%'
      })),
      transition('initial <=> compressed', animate('400ms ease-in')),
    ]),

    trigger('detailState', [
      state('large', style({
        opacity: 1,
      })),
      state('small', style({
        opacity: 0,
      })),
      transition('large <=> small', animate('400ms ease-out'))
    ]),

    trigger('titleState', [
      state('center', style({
        transform: 'translate(0px,15px)'
      })),
      state('left', style({
        transform: 'translate(-80px,15px)'
      })),
      transition('center <=> left', animate('0.5s ease-in'))
    ]),

    trigger('subtitleState', [
      state('center', style({
        transform: 'translateX(0px)'
      })),
      state('left', style({
        transform: 'translateX(-44px)'
      })),
      transition('center <=> left', animate('0.5s ease-in'))
    ])

  ]
})

export class TransferFormPage implements OnInit {
  @ViewChild('reference') reference: IonInput;
  @ViewChild('amount') amount: IonInput;

  fabToHide;
  // userDetail;
  textColor = 'white';
  enabled = false;  // fab button enabled
  count = 0; // count fab taps
  state = 'initial';  // header state
  detailState = 'large';
  input2 = false;
  input3 = false;

  titleState = 'center';
  subtitleState = 'center';

  showToTransfer = false; // show last button in form

  constructor(
    private renderer: Renderer2,
    private element: ElementRef,
    private router: Router,
    private menu: MenuController,
    private modalCtrl: ModalController,
    private screenOrientation: ScreenOrientation
    ){
    this.menu.enable(false );
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }

  ngOnInit() {
    this.fabToHide = this.element.nativeElement.getElementsByClassName('form-fab')[0];
    this.renderer.setStyle(this.fabToHide, 'webkitTransition', 'opacity 500ms');

  }

  onInput() {
    this.enabled = true;
  }

  onFocus() {
    if (this.count === 2) {
      this.state = 'compressed';
      this.detailState = 'small';

      this.titleState = 'left';
      this.subtitleState = 'left';
    }
  }

  nextItem() {
    this.count += 1;

    if (this.count === 1) {
      this.input2 = true;
      this.state = 'compressed';
      this.detailState = 'small';

      this.titleState = 'left';
      this.subtitleState = 'left';

      setTimeout(() => {
        this.reference.setFocus();
      }, 300);
    }

    if (this.count === 2) {
      this.input3 = true;
      this.enabled = false;

      this.showToTransfer = true;
      this.state = 'initial';
      this.detailState = 'large';
    }

  }

  async toTransfer() {
    const modal = await this.modalCtrl.create({
      component: SendMoneyDialogPage,
      cssClass: 'second-modal-class',
      componentProps: {
        'name': 'Mark',
        'amount': this.amount
      }
    });
    await modal.present();
  }

  onBack() {
    this.menu.enable(true);
    this.router.navigateByUrl('/transfer')
  }
}
