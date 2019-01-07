import { Component, OnInit } from '@angular/core';
import { AddressFormOptions } from '../../interfaces/address-form-options';

@Component({
  selector: 'address-form',
  templateUrl: './address-form.page.html',
  styleUrls: ['./address-form.page.scss'],
})
export class AddressFormPage implements OnInit {
  address: AddressFormOptions = {
    street: '',
    cp: '',
    city_state: '',
    country: ''
  };
  submitted = false;
  constructor() { }

  ngOnInit() {
  }

  onAddressForm() {
    console.log('woo');
  }
}
