import {Component} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {AmplifyService} from 'aws-amplify-angular';
import {Router} from '@angular/router';
import {AuthGuardService} from './services/auth-guard.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  public appPages = [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: 'analytics'
    },
    {
      title: 'Profile',
      url: '/profile',
      icon: 'contact'
    },
    {
      title: 'Maps',
      url: '/maps',
      icon: 'map'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private amplifyService: AmplifyService,
    private router: Router,
    private authGuardService: AuthGuardService
  ) {
    this.initializeApp();
    this.amplifyService.authStateChange$
      .subscribe(authState => {
        console.log('authStateChange$');
        console.log(authState);

        if (authState.state === 'signedIn') {
          this.authGuardService.signedIn = true;
          this.authGuardService.user = authState.user;
          if (this.router.url === '/login') {
            this.router.navigateByUrl('/dashboard');
          }
        } else {
          this.authGuardService.signedIn = false;
          this.authGuardService.user = null;
          this.router.navigateByUrl('/login');
        }
      });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
