import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {AmplifyAngularModule, AmplifyIonicModule, AmplifyService} from 'aws-amplify-angular';
import {APIService} from './API.service';
import {AuthGuardService} from './services/auth-guard.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AmplifyAngularModule,
    AmplifyIonicModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AmplifyService,
    APIService,
    AuthGuardService

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
