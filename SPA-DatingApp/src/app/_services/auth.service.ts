import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {resolveFileWithPostfixes} from '@angular/compiler-cli/ngcc/src/utils';
import {RegisterModel} from '../register/RegisterModel';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'https://localhost:5001/api/auth/';
  jwtHelper = new JwtHelperService();
  decodedToken: any;

  constructor(private http: HttpClient) { }

  login(model: any) {
    return this.http.post(this.baseUrl + 'login', model)
      .pipe(
        map((response: any) => {
          const userToken = response;
          if (userToken) {
            localStorage.setItem('token', userToken.token);
            this.decodedToken = this.jwtHelper.decodeToken(userToken.token);
          }
        })
      );
  }

  register(model: RegisterModel) {
    return this.http.post(this.baseUrl + 'register', model);
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }
}
