import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
import { MakePaymentDialogPage } from './pages/make-payment-dialog/make-payment-dialog.page';
import { TermsDialogPage } from './pages/terms-dialog/terms-dialog.page';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  declarations: [AppComponent, SendMoneyDialogPage, MakePaymentDialogPage, TermsDialogPage],
  providers: [InAppBrowser, SplashScreen, StatusBar],
  bootstrap: [AppComponent],
  entryComponents: [SendMoneyDialogPage, TermsDialogPage]
})
export class AppModule {}
