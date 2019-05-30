import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router , NavigationExtras} from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Events, MenuController, Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';

import { UserData } from './services/user-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  loggedIn = false;

  constructor(
    private events: Events,
    private menu: MenuController,
    private platform: Platform,
    private router: Router,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    private userData: UserData
  ) {
    this.initializeApp();
  }

  ngOnInit() {
    this.checkLoginStatus();
    this.listenForLoginEvents();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.statusBar.styleBlackOpaque();
      this.splashScreen.hide();
    });
  }

  checkLoginStatus() {
    return this.userData.isLoggedIn().then(loggedIn => {
      return this.updateLoggedInStatus(loggedIn);
    });
  }

  updateLoggedInStatus(loggedIn: boolean) {
    setTimeout(() => {
      this.loggedIn = loggedIn;
    }, 300);
  }

  listenForLoginEvents() {
    this.events.subscribe('user:login', () => {
      this.updateLoggedInStatus(true);
    });

    this.events.subscribe('user:signup', () => {
      this.updateLoggedInStatus(true);
    });

    this.events.subscribe('user:logout', () => {
      this.updateLoggedInStatus(false);
    });
  }

  navigate(url: string) {
    return this.router.navigateByUrl(url);
  }

  logout() {
    // this.storage.remove('authToken');
    this.userData.logout().then(() => {
      this.storage.get('authToken').then((val)=>{
        if (val){
          this.storage.remove('authToken')
        }
      });
      return this.navigate('/login');
    });
  }

  openTutorial() {
    this.menu.enable(false);
    this.storage.set('ion_did_tutorial', 'false');
    this.router.navigateByUrl('/tutorial');
  }

  goLogin() {
    this.menu.enable(false);
    const navigationExtras: NavigationExtras = {
        queryParams: { 'origin': 'account'}
    };
    this.router.navigate(['login'] , navigationExtras);
  }

  goCreateAccount() {
    this.menu.enable(false);
    const navigationExtras: NavigationExtras = {
        queryParams: { 'origin': 'account'}
    };
    this.router.navigate(['signup'] , navigationExtras);
  }

  goEditProfile() {
    this.menu.enable(false);
    this.router.navigateByUrl('/editProfile');
  }

  goSubscribe() {
    this.menu.enable(false);
    const navigationExtras: NavigationExtras = {
      queryParams: {'origin': 'account'}
    };
    this.router.navigate(['subscribe'], navigationExtras);
  }

  goBankAccount(){
    this.menu.enable(false);
    this.router.navigateByUrl('/bank-account');
  }
}
