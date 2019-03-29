<<<<<<< HEAD
import { Component, OnInit ,Input, Output, EventEmitter } from '@angular/core';
=======
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
>>>>>>> b33ec6ad6011a4002a7e9b007e1e115ca870240c

@Component({
  selector: 'pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.scss']
})
export class PinComponent implements OnInit {
<<<<<<< HEAD
  ngOnInit() {
  }

  @Input() pagetitle: String = "Crear PIN";
  @Input() pageSubtitle: String = "Crea tu PIN de Inicio de Sesión";

  pin:string= "";

  @Output() change: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}
=======

  @Input() pagetitle: String = 'Enter Pin';
  pin = '';

  @Output() change: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
>>>>>>> b33ec6ad6011a4002a7e9b007e1e115ca870240c

  emitEvent() {
    this.change.emit(this.pin);
  }

  handleInput(pin: string) {
<<<<<<< HEAD
    if (pin === "clear") {
      this.pin = "";
      return;
    }
    this.pin += pin;
    
=======
    if (pin === 'clear') {
      this.pin = '';
      return;
    }
    this.pin += pin;

>>>>>>> b33ec6ad6011a4002a7e9b007e1e115ca870240c
    if (this.pin.length === 4) {
      this.change.emit(this.pin);
      return;
    }
  }
<<<<<<< HEAD
=======

>>>>>>> b33ec6ad6011a4002a7e9b007e1e115ca870240c
}
