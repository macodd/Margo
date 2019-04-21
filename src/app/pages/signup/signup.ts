import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController, MenuController } from '@ionic/angular';

// import { UserData } from '../../services/user-data';

// Interface
import { UserOptions } from '../../interfaces/user-options';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  styleUrls: ['./signup.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SignupPage {
  signup: UserOptions = {
    fullname: '',
    phone: '',
    email: '',
    id: ''
  };

  submitted = false;
  origin = '';
  // isViewPersonal = true;
  // isViewBusiness = false;

  constructor(
    private router: Router,
    // public userData: UserData,
    private route: ActivatedRoute,
    private loadingController: LoadingController,
    private menu: MenuController
  ) {
    this.route.queryParams.subscribe(params => {
        this.origin = params['origin'];
    });
    this.menu.enable(false)
  }

  onSignup(form: NgForm) {
    this.submitted = true;
    this.presentLoading().then(()=>{
      this.router.navigateByUrl('/auth-pin');
    });
  }

  onLogin(){
    this.router.navigateByUrl('/login')
  }

  onBack(){
    if(this.origin === "account")
      this.router.navigateByUrl('/account');
    else 
      this.router.navigateByUrl('/tutorial')
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 2000
    });
    loading.present();
    return await loading.onWillDismiss();
  }

  // segmentButtonClicked(type: String) {
  //   if (type === 'personal') {
  //     this.isViewPersonal = true;
  //     // this.isViewBusiness = false;
  //   }
  //   if (type === 'business') {
  //     // this.isViewBusiness = true;
  //     this.isViewPersonal = false;
  //   }
  // }
}
