import {Component, OnInit} from '@angular/core';
import {APIService} from '../API.service';
import {AuthGuardService} from '../services/auth-guard.service';
import { ProfileService } from '../services/profile.service';

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

        this.profileService.getTripDetails(data.items[0].id).subscribe(data => {
          this.items.push({property: 'Carbon Footprint', value: data.carbon})
          this.items.push({property: 'Cost', value: data.cost})
          this.items.push({property: 'Distance', value: data.distance})
          this.items.push({property: 'Score', value: data.score})
        })
      });
    }
  }
}
