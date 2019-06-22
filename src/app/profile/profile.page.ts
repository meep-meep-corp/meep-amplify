import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { APIService } from '../API.service';
import { AmplifyService } from 'aws-amplify-angular';
import { AuthGuardService } from '../services/auth-guard.service';

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
      console.log(this.auth.user.attributes.email);
      
      this.api.ListUsers({email: {eq: this.auth.user.attributes.email}}).then((data) => {
        console.log(data);
        this.items.push({ property: 'Name', value: data[0].name});
        this.items.push({ property: 'Email', value: data[0].email});
      }) 
    } 
  }
}
