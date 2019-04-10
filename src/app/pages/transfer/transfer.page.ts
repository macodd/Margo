import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddUserService } from '../add-user/add-user.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.page.html',
  styleUrls: ['./transfer.page.scss']
})
export class TransferPage implements OnInit {

  currentUser: boolean;

  constructor(private router: Router, private addUserService: AddUserService) { }

  ngOnInit() {
    this.addUserService.userActivated.subscribe(
      (user: boolean) => {
        this.currentUser = user;
        console.log(this.currentUser);
      }
    );
  }

  goSearch() {
    this.router.navigateByUrl('search');
  }

  transferMoney() {
    console.log('transfering money');
    this.router.navigateByUrl('transfer-form');
  }

}
