import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {NavComponent} from './nav/nav.component';
import {FormsModule} from '@angular/forms';
import {AuthService} from './_services/auth.service';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';
import {ErrorInterceptorProvider} from './_services/error.interceptor.service';
import {AlertifyService} from './_services/alertify.service';
import {BsDropdownModule} from "ngx-bootstrap";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MemberListComponent} from './members/member-list/member-list.component';
import {ListsComponent} from './lists/lists.component';
import {MessagesComponent} from './messages/messages.component';
import {RouterModule} from "@angular/router";
import {appRoutes} from "./routes";
import {AuthGuard} from "./_guards/auth.guard";
import {UserService} from "./_services/user.service";
import {MemberCardComponent} from './members/member-card/member-card.component';
import {JwtModule} from "@auth0/angular-jwt";
import {config} from "rxjs";

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    MemberListComponent,
    ListsComponent,
    MessagesComponent,
    MemberCardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:5000'],
        blacklistedRoutes: ['localhost:5000/auth']
      }
    })
  ],
  providers: [AuthService, ErrorInterceptorProvider, AlertifyService, AuthGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
