import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthGuardService} from '../services/auth-guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
