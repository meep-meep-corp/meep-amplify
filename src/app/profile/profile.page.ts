import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  items = [];

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.getProfileInfo().subscribe(data => this.items = data);
  }

}
