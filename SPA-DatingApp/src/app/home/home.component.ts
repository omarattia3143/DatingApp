import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ValueModel} from '../Models/ValueModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  values: ValueModel[];
  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

  toggleRegisterMode(options?: boolean) {
    if (options != null) {
      this.registerMode = options;
    } else {
      this.registerMode = !this.registerMode;
    }
  }

}
