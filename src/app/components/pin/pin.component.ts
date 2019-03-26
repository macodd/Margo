import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.scss']
})
export class PinComponent implements OnInit {

  @Input() pagetitle: String = 'Enter Pin';
  pin = '';

  @Output() change: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  emitEvent() {
    this.change.emit(this.pin);
  }

  handleInput(pin: string) {
    if (pin === 'clear') {
      this.pin = '';
      return;
    }
    this.pin += pin;

    if (this.pin.length === 4) {
      this.change.emit(this.pin);
      return;
    }
  }

}
