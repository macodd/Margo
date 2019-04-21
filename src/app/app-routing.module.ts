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
  { path: 'setpin-app', loadChildren: './pages/setpin-app/setpin-app.module#SetpinAppPageModule' },
  { path: 'setting', loadChildren: './pages/setting/setting.module#SettingPageModule' },
  { path: 'activity', loadChildren: './pages/activity/activity.module#ActivityPageModule' },
  { path: 'send-money-dialog', loadChildren: './pages/send-money-dialog/send-money-dialog.module#SendMoneyDialogPageModule' },
  { path: 'payment-successful', loadChildren: './pages/payment-successful/payment-successful.module#PaymentSuccessfulPageModule' },
  { path: 'editProfile', loadChildren: './pages/edit-profile/edit-profile.module#EditProfilePageModule' },
  { path: 'auth-pin', loadChildren: './pages/auth-pin/auth-pin.module#AuthPinPageModule' },
  { path: 'terms-dialog', loadChildren: './pages/terms-dialog/terms-dialog.module#TermsDialogPageModule' },
  { path: 'notifications', loadChildren: './pages/notifications/notifications.module#NotificationsPageModule' },
  { path: 'notification-dialog', loadChildren: './pages/notification-dialog/notification-dialog.module#NotificationDialogPageModule' },
  { path: 'transfer', loadChildren: './pages/transfer/transfer.module#TransferPageModule' },
  { path: 'search', loadChildren: './pages/search/search.module#SearchPageModule' },
  { path: 'add-user', loadChildren: './pages/add-user/add-user.module#AddUserPageModule' },
  { path: 'transfer-form', loadChildren: './pages/transfer-form/transfer-form.module#TransferFormPageModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
