import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, Slides } from '@ionic/angular';

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
  @ViewChild('slides') slides: Slides;

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
    });
  }

  /**
   * managment position tutorial
   */
  slideChanged() {
    this.slides.getActiveIndex().then((position: number) => {
      this.storage.set('tutorial_position', position);
    });
  }
}
