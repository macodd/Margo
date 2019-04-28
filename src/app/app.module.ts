import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { SendMoneyDialogPage } from './pages/send-money-dialog/send-money-dialog.page';
import { NotificationDialogPage } from './pages/notification-dialog/notification-dialog.page';
import { AddUserService } from './pages/add-user/add-user.service';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

// Biometrics
// import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,

    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  declarations: [
    AppComponent,
    SendMoneyDialogPage,
    NotificationDialogPage,

  ],
  providers: [
    InAppBrowser,
    SplashScreen,
    StatusBar,
    AddUserService,
    ScreenOrientation
    // FingerprintAIO,
    ],
  bootstrap: [AppComponent],
  entryComponents: [SendMoneyDialogPage, NotificationDialogPage]
})
export class AppModule {}
