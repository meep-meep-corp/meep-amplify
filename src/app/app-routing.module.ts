import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from './services/auth-guard.service';
import {LoginPage} from './login/login.page';
import {DashboardPage} from './dashboard/dashboard.page';
import {MapsPage} from './maps/maps.page';
import {ProfilePage} from './profile/profile.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {path: 'profile', component: ProfilePage, canActivate: [AuthGuardService]},
  {path: 'maps', component: MapsPage, canActivate: [AuthGuardService]},
  {path: 'dashboard', component: DashboardPage, canActivate: [AuthGuardService]},
  {path: 'login', component: LoginPage},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
