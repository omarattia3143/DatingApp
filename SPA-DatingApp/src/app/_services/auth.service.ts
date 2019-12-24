import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {resolveFileWithPostfixes} from '@angular/compiler-cli/ngcc/src/utils';
import {RegisterModel} from '../register/RegisterModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'https://localhost:44382/api/auth/';
  constructor(private http: HttpClient) { }

  login(model: any) {
    return this.http.post(this.baseUrl + 'login', model)
      .pipe(
        map((response: any) => {
          const userToken = response;
          if (userToken) {
            localStorage.setItem('token', userToken.token);
            console.log(userToken.token);
          }
        })
      );
  }

  register(model: RegisterModel) {
    return this.http.post(this.baseUrl + 'register', model);
  }
}
