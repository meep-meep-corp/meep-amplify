import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AmplifyAngularModule, AmplifyIonicModule, AmplifyService} from 'aws-amplify-angular';
import {APIService} from './API.service';
import {AuthGuardService} from './services/auth-guard.service';
import {LoginPage} from './login/login.page';
import {ProfilePage} from './profile/profile.page';
import {MapsPage} from './maps/maps.page';
import {DashboardPage} from './dashboard/dashboard.page';
import {NgCalendarModule} from 'ionic2-calendar';
import {ProfileService} from '../services/profile.service';
import {MarkerEventService} from '../services/marker.service';

@NgModule({
  declarations: [AppComponent,
    LoginPage,
    ProfilePage,
    MapsPage,
    DashboardPage
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AmplifyAngularModule,
    AmplifyIonicModule,
    NgCalendarModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    AmplifyService,
    APIService,
    AuthGuardService,
    ProfileService,
    MarkerEventService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
