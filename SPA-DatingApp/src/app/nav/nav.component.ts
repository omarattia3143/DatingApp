import { Component, OnInit } from '@angular/core';
import {AuthService} from '../_services/auth.service';
import {AlertifyService} from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
model: any = {};

  constructor(private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('Access Granted!');
    }, err => {
      this.alertify.error('Access Denied!');
    });
  }

  isLoggedIn() {
   return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    this.alertify.message('the user has logged out');
  }
}
