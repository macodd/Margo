import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

// Interface
import { UserOptions } from '../../interfaces/user-options';



@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  styleUrls: ['./signup.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SignupPage {
  signup: UserOptions = { firstname: '',
    lastname: '',
    phone: '',
    email: '',
    id: '',
    address: 'Main St. 420' };
  submitted = false;
  typeAccount = 'personal';
  isViewPersonal = true;
  isViewBussines = false;

  constructor(
    public router: Router,
    public userData: UserData
  ) {}

  onSignup(form: NgForm) {
    this.submitted = true;
    this.router.navigateByUrl('/setpassword');
  }

  onAddressFocus(event) {
    this.router.navigateByUrl('/address-main');
  }
  segmentButtonClicked(type: String) {
    if (type === 'personal') {
      this.isViewPersonal = true;
      this.isViewBussines = false;
    }
    if (type === 'business') {
      this.isViewBussines = true;
      this.isViewPersonal = false;
    }
  }
}
