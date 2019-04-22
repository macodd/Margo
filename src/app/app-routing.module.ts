import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/tutorial', pathMatch: 'full'},
  { path: 'account', loadChildren: './pages/account/account.module#AccountModule'},
  { path: 'activity', loadChildren: './pages/activity/activity.module#ActivityPageModule' },
  { path: 'add-user', loadChildren: './pages/add-user/add-user.module#AddUserPageModule' },
  { path: 'auth-pin', loadChildren: './pages/auth-pin/auth-pin.module#AuthPinPageModule' },
  { path: 'bank-account', loadChildren: './pages/bank-account/bank-account.module#BankAccountPageModule' },
  { path: 'editProfile', loadChildren: './pages/edit-profile/edit-profile.module#EditProfilePageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginModule'},
  { path: 'login/:origin', loadChildren: './pages/login/login.module#LoginModule'},
  { path: 'notifications', loadChildren: './pages/notifications/notifications.module#NotificationsPageModule' },
  { path: 'notification-dialog', loadChildren: './pages/notification-dialog/notification-dialog.module#NotificationDialogPageModule' },
  { path: 'payment-successful', loadChildren: './pages/payment-successful/payment-successful.module#PaymentSuccessfulPageModule' },
  { path: 'search', loadChildren: './pages/search/search.module#SearchPageModule' },
  { path: 'send-money-dialog', loadChildren: './pages/send-money-dialog/send-money-dialog.module#SendMoneyDialogPageModule' },
  { path: 'setpassword', loadChildren: './pages/setpassword/setpassword.module#SetpasswordPageModule' },
  { path: 'setpin-app', loadChildren: './pages/setpin-app/setpin-app.module#SetpinAppPageModule' },
  { path: 'signup', loadChildren: './pages/signup/signup.module#SignUpModule'},
  { path: 'signup/:origin', loadChildren: './pages/signup/signup.module#SignUpModule'},
  { path: 'terms', loadChildren: './pages/terms/terms.module#TermsPageModule' },
  { path: 'transfer', loadChildren: './pages/transfer/transfer.module#TransferPageModule' },
  { path: 'transfer-form', loadChildren: './pages/transfer-form/transfer-form.module#TransferFormPageModule' },
  { path: 'tutorial', loadChildren: './pages/tutorial/tutorial.module#TutorialModule'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
