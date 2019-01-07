import { Component, OnInit, ViewChild } from '@angular/core';
import { SetPinNumberOptions } from '../../interfaces/set-pin-number-options';

@Component({
  selector: 'setpin-app',
  templateUrl: './setpin-app.page.html',
  styleUrls: ['./setpin-app.page.scss'],
})
export class SetpinAppPage implements OnInit {
  setpinnumber: SetPinNumberOptions = {
    digit1: '',
    digit2: '',
    digit3: '',
    digit4: '',
    digit5: '',
    digit6: ''
  };
  submitted = false;

  constructor() { }

  ngOnInit() {
  }

  jumpInput(d) {
    console.log(d);
    d.setFocus();
  }

  onPinComplete() {
    // This the pin number
    const pin = this.setpinnumber.digit1 + this.setpinnumber.digit2 + this.setpinnumber.digit3 +
    this.setpinnumber.digit4 + this.setpinnumber.digit5 + this.setpinnumber.digit6;
    console.log(pin);
  }
}
