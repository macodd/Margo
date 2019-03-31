import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  notifications: Array<Object> = [{type: String, amount: String, description: String}];

  constructor() {
    this.notifications = [
      {
        type: 'Cash In',
        amount: '+$50.00 USD',
        description: 'You have received money from Jacob E. Miller successful.'
      },
      {
        type: 'Send Money',
        amount: '+$1200.00 USD',
        description: 'You have received money from Jacob E. Miller successful.'
      },
      {
        type: 'Payment',
        amount: '+$1200.00 USD',
        description: 'You have received money from Jacob E. Miller successful.'
      },
      {
        type: 'Cash Out',
        amount: '+$750.00 USD',
        description: 'You have received money from Jacob E. Miller successful.'
      },
    ];
  }

  ngOnInit() {
  }



}
