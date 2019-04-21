import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from '../../services/user-data';
import { MenuController } from '@ionic/angular';

// Interface
import { UserOptions } from '../../interfaces/user-options';
@Component({
  selector: 'edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  signup: UserOptions = {
    fullname: '',
    phone: '',
    email: '',
    id: '',
    };
  submitted = false;
  typeAccount = 'personal';
  isViewPersonal = true;
  isViewBussines = false;
  constructor(
    public router: Router,
    public userData: UserData,
    private menu: MenuController
  ) { }

  ngOnInit() {
  }

  onEdit(){
    console.log("still working")
  }

  onBack(){
    this.menu.enable(true);
    this.router.navigateByUrl('/account')
  }
}
