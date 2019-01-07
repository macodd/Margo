import { Component, OnInit } from '@angular/core';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';


@Component({
  selector: 'setpin',
  templateUrl: './setpin.page.html',
  styleUrls: ['./setpin.page.scss'],
})
export class SetpinPage implements OnInit {

  constructor(private faio: FingerprintAIO) { }

  faioCheck() {
    this.faio.show({
      clientId: 'Fingerprint-Demo',
      clientSecret: 'password', // Only necessary for Android
      disableBackup: true  // Only for Android(optional)
  })
  .then((result: any) => {
    // console.log(result))
    if (result === 'Success') {
      console.log('woo');
    }
  })
  .catch((error: any) => console.log(error));
  }

  ngOnInit() {
    this.faioCheck();
  }

}
