import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';

@Component({
  selector: 'activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'],
})
export class ActivityPage implements OnInit {

  constructor(private router: Router, public platform: Platform, private fingerprint: FingerprintAIO) { }

  ngOnInit() {
  }

  onBack() {
    this.router.navigateByUrl('/account');
  }

  async firstOption() {
    console.log('First option');
        /*** FINGERPRINT AIO ***/
  try {
      await this.platform.ready();
      const available = await this.fingerprint.isAvailable();
      console.log(available);
      if (available === 'finger' || available === 'face') {
        this.fingerprint.show({
          clientId: 'ionic-conference-app',
          clientSecret: 'password',
          disableBackup: false
        })
        .then((result: any) => {
          console.log(result);
        })
        .catch((error: any) => {
          console.log(error);
        });
      }
  } catch (e) {
    console.error(e);
  }
  }

}
