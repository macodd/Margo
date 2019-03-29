import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tutorial',
    pathMatch: 'full'
  },
  {
    path: 'account',
    loadChildren: './pages/account/account.module#AccountModule'
  },
  {
    path: 'login',
    loadChildren: './pages/login/login.module#LoginModule'
  },
  {
    path: 'login/:origin',
    loadChildren: './pages/login/login.module#LoginModule'
  },
  {
    path: 'signup',
    loadChildren: './pages/signup/signup.module#SignUpModule'
  },
  {
    path: 'signup/:origin',
    loadChildren: './pages/signup/signup.module#SignUpModule'
  },
  {
    path: 'tutorial',
    loadChildren: './pages/tutorial/tutorial.module#TutorialModule'
  },
  { path: 'setpassword', loadChildren: './pages/setpassword/setpassword.module#SetpasswordPageModule' },
  { path: 'terms', loadChildren: './pages/terms/terms.module#TermsPageModule' },
  { path: 'address-main', loadChildren: './pages/address-main/address-main.module#AddressMainPageModule' },
  { path: 'address-map', loadChildren: './pages/address-map/address-map.module#AddressMapPageModule' },
  { path: 'address-form', loadChildren: './pages/address-form/address-form.module#AddressFormPageModule' },
  { path: 'setpin-app', loadChildren: './pages/setpin-app/setpin-app.module#SetpinAppPageModule' },
  { path: 'setting', loadChildren: './pages/setting/setting.module#SettingPageModule' },
  { path: 'activity', loadChildren: './pages/activity/activity.module#ActivityPageModule' },
  { path: 'send-money', loadChildren: './pages/send-money/send-money.module#SendMoneyPageModule' },
  { path: 'send-money-dialog', loadChildren: './pages/send-money-dialog/send-money-dialog.module#SendMoneyDialogPageModule' },
  { path: 'payment-successful', loadChildren: './pages/payment-successful/payment-successful.module#PaymentSuccessfulPageModule' },
  { path: 'make-payment', loadChildren: './pages/make-payment/make-payment.module#MakePaymentPageModule' },
  { path: 'editProfile', loadChildren: './pages/edit-profile/edit-profile.module#EditProfilePageModule' },
  { path: 'make-payment-dialog', loadChildren: './pages/make-payment-dialog/make-payment-dialog.module#MakePaymentDialogPageModule' },
  { path: 'auth-pin', loadChildren: './pages/auth-pin/auth-pin.module#AuthPinPageModule' },
  { path: 'terms-dialog', loadChildren: './pages/terms-dialog/terms-dialog.module#TermsDialogPageModule' },
  { path: 'auth-pin', loadChildren: './pages/auth-pin/auth-pin.module#AuthPinPageModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
