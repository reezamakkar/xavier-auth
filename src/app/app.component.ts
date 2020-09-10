import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'xavier-auth';
  isAuthenticated: boolean;
  constructor(public oktaAuth: OktaAuthService) {}

  ngOnInit() {
    this.oktaAuth.$isAuthenticated.subscribe(val => this.isAuthenticated = val);
  }
}
