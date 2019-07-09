import { LoadingController, MenuController, Platform} from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras} from '@angular/router';
import { ScreenOrientation } from "@ionic-native/screen-orientation/ngx";
import { Validators, FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { BackendAPIService } from "../../services/backend-api.service";

@Component({
  selector: 'setpassword',
  templateUrl: './setpassword.page.html',
  styleUrls: ['./setpassword.page.scss'],
})
export class SetpasswordPage implements OnInit {

  private userFormGroup: FormGroup;
  group: any;

  first_n: string;

  constructor(
    private router: Router,
    private platform: Platform,
    private menu: MenuController,
    private fBuilder: FormBuilder,
    private route: ActivatedRoute,
    private backend: BackendAPIService,
    private screenOrientation: ScreenOrientation,
    private loadingController: LoadingController
  ) {
    this.route.queryParams.subscribe(params => {
      this.group = params;
    });

    this.menu.enable(false);
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);

    this.userFormGroup = fBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      password2: ['', Validators.required],
    });

    this.first_n = this.group['first_name'];

    this.userFormGroup.addControl('first_name', new FormControl(this.group['first_name']));
    this.userFormGroup.addControl('last_name', new FormControl(this.group['last_name']));
    this.userFormGroup.addControl('email', new FormControl(this.group['email']));
    this.userFormGroup.addControl('phone', new FormControl(this.group['phone']));
    this.userFormGroup.addControl('identity', new FormControl(this.group['identity']));
  }

  passwordType = 'password';
  password2Type = 'password';
  passwordIcon = 'eye-off';
  password2Icon = 'eye-off';

  ngOnInit() {}

  onSetPassword(event) {
    event.preventDefault();
    this.presentLoading().then(()=>{
      this.backend.setpassword(this.userFormGroup.value).subscribe(data=>{
        console.log('success');
        const navigationExtras: NavigationExtras = {
          queryParams: this.userFormGroup.value
        };
        this.router.navigate(['setpin-app'], navigationExtras);
      }, err => {
        console.log(err);
        alert(err['error']['detail']);
      })
    });
  }

  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

  hideShowPassword2() {
    this.password2Type = this.password2Type === 'text' ? 'password' : 'text';
    this.password2Icon = this.password2Icon === 'eye-off' ? 'eye' : 'eye-off';
  }

  onBack() {
    this.router.navigateByUrl('/signup')
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      duration: 2000,
      spinner: "crescent",
      cssClass: 'my-loading-class'
    });
    loading.present();
    return await loading.onWillDismiss();
  }
}
