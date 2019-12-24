import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RegisterModel} from './RegisterModel';
import {ValueModel} from '../Models/ValueModel';
import {AuthService} from '../_services/auth.service';
import {log} from 'util';

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

  constructor(private authService: AuthService) {}
  ngOnInit() {
  }

  register() {
    this.authService.register(this.user).subscribe(() => {
      console.log('registration successful');
    }, error => console.log('registration error'));
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

}

