import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {Events} from '@ionic/angular';
import {AmplifyService} from 'aws-amplify-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  signedIn = false;
  user = null;

  constructor(public router: Router) {
  }

  canActivate() {
    if  (!this.signedIn) {
      this.router.navigateByUrl('/login');
      return false;
    } else {
      return true;
    }
  }
}
