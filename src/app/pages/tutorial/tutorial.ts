import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, IonSlides } from '@ionic/angular';

import { Storage } from '@ionic/storage';
import { text } from '@angular/core/src/render3';

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
    public menu: MenuController,
    public router: Router,
    public storage: Storage
  ) {}

  startApp() {
    this.slides.slideTo(4, 500);
  }

  goLogin() {
    this.router.navigateByUrl('/login');
  }

  goSignup() {
    this.router.navigateByUrl('/signup');
  }

  onSlideChangeStart(event) {
    event.target.isEnd().then(isEnd => {
      this.showSkip = !isEnd;
    });
  }

  ionViewWillEnter() {
    this.storage.get('tutorial_position').then(position => {
      this.slides.slideTo(position, 500);
    });
    this.menu.enable(false);
  }

  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
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
      });
    });
  }
}
