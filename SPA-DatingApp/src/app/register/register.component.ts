import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RegisterModel} from './RegisterModel';
import {ValueModel} from '../Models/ValueModel';
import {AuthService} from '../_services/auth.service';
import {log} from 'util';
import {AlertifyService} from '../_services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   user: RegisterModel = {
     username: '',
     password: ''
   };
  @Output() cancelRegister = new EventEmitter();

  constructor(private authService: AuthService, private alertify: AlertifyService) {}
  ngOnInit() {
  }

  register() {
    this.authService.register(this.user).subscribe(() => {
      this.alertify.success('registration successful');
    }, error => this.alertify.error('registration error'));
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

}

