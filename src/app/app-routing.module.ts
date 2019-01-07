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
    path: 'signup',
    loadChildren: './pages/signup/signup.module#SignUpModule'
  },
  {
    path: 'tutorial',
    loadChildren: './pages/tutorial/tutorial.module#TutorialModule'
  },
  { path: 'setpassword', loadChildren: './pages/setpassword/setpassword.module#SetpasswordPageModule' },
  { path: 'setpin', loadChildren: './pages/setpin/setpin.module#SetpinPageModule' },
  { path: 'terms', loadChildren: './pages/terms/terms.module#TermsPageModule' },
  { path: 'address-main', loadChildren: './pages/address-main/address-main.module#AddressMainPageModule' },
  { path: 'address-map', loadChildren: './pages/address-map/address-map.module#AddressMapPageModule' },
  { path: 'address-form', loadChildren: './pages/address-form/address-form.module#AddressFormPageModule' },
  { path: 'setpin-app', loadChildren: './pages/setpin-app/setpin-app.module#SetpinAppPageModule' },
  { path: 'setting', loadChildren: './pages/setting/setting.module#SettingPageModule' },
  { path: 'activity', loadChildren: './pages/activity/activity.module#ActivityPageModule' },
  { path: 'send-money', loadChildren: './pages/send-money/send-money.module#SendMoneyPageModule' },
  { path: 'send-money-dialog', loadChildren: './pages/send-money-dialog/send-money-dialog.module#SendMoneyDialogPageModule' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
