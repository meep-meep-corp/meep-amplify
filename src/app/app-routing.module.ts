import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from './services/auth-guard.service';
import {LoginPage} from './login/login.page';
import {DashboardPage} from './dashboard/dashboard.page';
import {MapsPage} from './maps/maps.page';
import {ProfilePage} from './profile/profile.page';
<<<<<<< HEAD
import { ScoreboardPage } from './scoreboard/scoreboard.page';
=======
import {ChatbotPage} from './chatbot/chatbot.page';
>>>>>>> d6991f0be5400eb60f4619e8c82da98ce780e4f2

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {path: 'profile', component: ProfilePage, canActivate: [AuthGuardService]},
  {path: 'maps', component: MapsPage, canActivate: [AuthGuardService]},
  {path: 'dashboard', component: DashboardPage, canActivate: [AuthGuardService]},
  {path: 'chatbot', component: ChatbotPage, canActivate: [AuthGuardService]},
  {path: 'login', component: LoginPage},
<<<<<<< HEAD
  {path: 'scoreboard', component: ScoreboardPage },
=======
  {path: 'chatbot', component: ChatbotPage, canActivate: [AuthGuardService]},
>>>>>>> d6991f0be5400eb60f4619e8c82da98ce780e4f2
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
