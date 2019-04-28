import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, IonSlides } from '@ionic/angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
  styleUrls: ['./tutorial.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TutorialPage {
  showSkip = true;
  isBeginning = true;

  skipClasses: any = {
    'light-text': true,
    'dark-text': false
  };

  @ViewChild('slides') slides: IonSlides;

  constructor(
    private menu: MenuController,
    private router: Router,
    private storage: Storage,
    private screenOrientation: ScreenOrientation
  ) {}

  startApp() {
    this.slides.slideTo(4, 500);
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }

  goLogin() {
    this.router.navigateByUrl('/login');
  }

  goSignup() {
    this.router.navigateByUrl('/signup');
  }

  onSlideChangeStart(event) {
    event.target.isEnd().then(isEnd => {
      console.log(isEnd);
      this.showSkip = !isEnd;
    });
  }

  ionViewWillEnter() {
    this.storage.get('tutorial_position').then(position => {
      this.slides.slideTo(position, 500);
    });
    this.menu.enable(false);
  }

  slideDidChange() {
    this.slides.isBeginning().then(beginning => {
      this.isBeginning = beginning;
      this.skipClasses = {
        'light-text': false,
        'dark-text': true
      };
    });
  }

  /**
   * managment position tutorial
   */
  slideChanged() {
    this.slides.getActiveIndex().then((position: number) => {
      this.storage.set('tutorial_position', position);
      this.slides.isBeginning().then(beginning => {
        this.isBeginning = beginning;

        if (this.isBeginning) {
          this.skipClasses = {
            'light-text': true,
            'dark-text': false
          };
        }
        this.hideButtonSkipe(position);
      });
    });
  }

  hideButtonSkipe(position: number){
    if(position === 4)
      this.showSkip = false;
  }
}
