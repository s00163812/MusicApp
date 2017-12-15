import { AuthService } from '../services/auth.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { NotificationService } from '../services/notification.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // variables needed to log in
  email: string;
  pass: string;
  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  //login method
  login() {
    this.auth.login(this.email, this.pass);
    console.log(this.email);
    console.log(this.pass);
  }
}
