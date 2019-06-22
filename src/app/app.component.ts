import {Component} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {AmplifyService} from 'aws-amplify-angular';
import awsconfig from '../aws-exports';
import {Router} from '@angular/router';
import {auth} from 'aws-amplify-angular/dist/src/assets/data-test-attributes';
import {AuthGuardService} from './services/auth-guard.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'QR Code',
      url: '/qr',
      icon: 'code'
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
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: 'analytics'
    }
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
        console.log(authState);
        this.authGuardService.signedIn = authState.state === 'signedIn';
        if (!authState.user) {
          this.authGuardService.user = null;
        } else {
          this.authGuardService = authState.user;
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
