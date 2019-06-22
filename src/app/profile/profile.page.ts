import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { APIService } from '../API.service';
import { AmplifyService } from 'aws-amplify-angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  items = [];

  constructor(private profileService: ProfileService, private api: APIService, private amplify: AmplifyService) { }

  ngOnInit() {
    if (this.amplify.authState) {
      this.api.GetUser('1').then((data) => {
        console.log(data);
        this.items.push({ property: 'Name', value: data.name});
        this.items.push({ property: 'Email', value: data.email});
      }) 
    } 
  }
}
