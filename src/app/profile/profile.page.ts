import {Component, OnInit} from '@angular/core';
import {ProfileService} from '../../services/profile.service';
import {APIService} from '../API.service';
import {AmplifyService} from 'aws-amplify-angular';
import {AuthGuardService} from '../services/auth-guard.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  static userEmail;
  items = [];

  constructor(private profileService: ProfileService,
              private api: APIService,
              private auth: AuthGuardService) {

  }

  ngOnInit() {
    if (this.auth.user) {
      this.api.UserByEmail(this.auth.user.attributes.email).then((data) => {
        this.items.push({property: 'Name', value: data.items[0].name});
        this.items.push({property: 'Email', value: data.items[0].email});
      });
    }
  }
}
