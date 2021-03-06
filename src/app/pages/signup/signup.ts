import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';

import { UserData } from '../../services/user-data';

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
  origin = '';

  constructor(
    public router: Router,
    public userData: UserData,
    public route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(params => {
        this.origin = params['origin'];
    });
  }

  onSignup(form: NgForm) {
    this.submitted = true;
    this.router.navigateByUrl('/auth-pin');
    //this.router.navigateByUrl('/setpassword');
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
  onBack(){
    if(this.origin === "account")
      this.router.navigateByUrl('/account');
    else 
      this.router.navigateByUrl('/tutorial')
  }
}
