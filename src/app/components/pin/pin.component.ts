import { Component, OnInit ,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.scss']
})
export class PinComponent implements OnInit {
  ngOnInit() {
  }

  @Input() pagetitle: String = "Crear PIN";
  @Input() pageSubtitle: String = "Crea tu PIN de Inicio de Sesión";

  pin:string= "";

  @Output() change: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  emitEvent() {
    this.change.emit(this.pin);
  }

  handleInput(pin: string) {
    if (pin === "clear") {
      this.pin = "";
      return;
    }
    this.pin += pin;
    
    if (this.pin.length === 4) {
      this.change.emit(this.pin);
      return;
    }
  }
}
