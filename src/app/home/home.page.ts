import {Component} from '@angular/core';
import {APIService} from '../API.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title = 'amplify-angular-app';


  constructor(private apiService: APIService) {
    this.apiService.ListUsers().then(result => console.log(result));
  }

}
